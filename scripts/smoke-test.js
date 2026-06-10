#!/usr/bin/env node
/**
 * Smoke test: starts the Vite dev server, fetches the app, and fails on 504s / blank screens.
 *
 * Usage:
 *   node scripts/smoke-test.js
 *   # or via package.json:
 *   npm run smoke-test
 */

import { spawn } from "child_process";
import { setTimeout } from "timers/promises";

const DEV_URL = process.env.SMOKE_URL || "http://localhost:3000";
const TIMEOUT_MS = Number(process.env.SMOKE_TIMEOUT) || 60000;
const POLL_INTERVAL_MS = 800;

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

function log(msg, color = "reset") {
  console.log(`${colors[color] || ""}${msg}${colors.reset}`);
}

function error(msg) {
  console.error(`${colors.red}ERROR: ${msg}${colors.reset}`);
}

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeout || 10000);
  try {
    const res = await fetch(url, { signal: controller.signal, ...opts });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function waitForServer(url, timeoutMs) {
  const start = Date.now();
  log(`Polling ${url} …`, "cyan");
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetchWithTimeout(url, { timeout: 3000 });
      if (res.status < 500) {
        log(`Server ready (${res.status})`, "green");
        return true;
      }
    } catch {
      // not ready yet
    }
    await setTimeout(POLL_INTERVAL_MS);
  }
  return false;
}

async function fetchAndCheck(url, description) {
  log(`  → ${description}: ${url}`, "cyan");
  let res;
  try {
    res = await fetchWithTimeout(url, { timeout: 15000 });
  } catch (e) {
    error(`Fetch failed for ${description}: ${e.message}`);
    return { ok: false, status: 0, blank: false, body: "" };
  }

  const status = res.status;
  const body = await res.text();
  const is504 = status === 504;
  const is500ish = status >= 500;
  const isBlank =
    body.trim().length === 0 ||
    body.includes("has_blank_screen") ||
    body.includes("504 Gateway Time-out") ||
    body.includes("before the app handler ran");

  if (is504) {
    error(`${description} returned 504`);
  } else if (is500ish) {
    error(`${description} returned ${status}`);
  } else if (isBlank) {
    error(`${description} appears blank (empty body or blank-screen marker)`);
  }

  return { ok: !is504 && !is500ish && !isBlank, status, blank: isBlank, body };
}

async function runSmokeTest() {
  log("=".repeat(60), "yellow");
  log("SMOKE TEST START", "yellow");
  log("=".repeat(60), "yellow");

  // 1. Start dev server
  log(`Starting dev server (timeout ${TIMEOUT_MS}ms) …`, "yellow");
  const server = spawn("bun", ["run", "dev"], {
    stdio: "pipe",
    detached: false,
    env: { ...process.env, NODE_ENV: "development" },
  });

  let serverExited = false;
  server.on("exit", (code) => {
    serverExited = true;
    if (code !== 0 && code !== null) {
      error(`Dev server exited early with code ${code}`);
    }
  });

  // Stream server stdout/stderr so we can see what’s happening
  let serverOutput = "";
  server.stdout.on("data", (d) => {
    const txt = d.toString();
    serverOutput += txt;
    if (process.env.SMOKE_VERBOSE) process.stdout.write(txt);
  });
  server.stderr.on("data", (d) => {
    const txt = d.toString();
    serverOutput += txt;
    if (process.env.SMOKE_VERBOSE) process.stderr.write(txt);
  });

  let failed = false;
  try {
    // 2. Wait for server readiness
    const ready = await waitForServer(DEV_URL, TIMEOUT_MS);
    if (!ready) {
      error("Dev server did not become ready in time.");
      failed = true;
      return;
    }

    // 3. Give Vite a moment to finish initial optimization / SSR bootstrap
    await setTimeout(3000);

    // 4. Fetch the root page
    const root = await fetchAndCheck(DEV_URL, "Root page (/)");
    if (!root.ok) failed = true;

    // 5. Probe dependency URLs that historically caused 504s
    const depPaths = [
      "/node_modules/.vite/deps/react.js",
      "/node_modules/.vite/deps/react-dom.js",
      "/node_modules/.vite/deps/@tanstack_react-router.js",
      "/node_modules/.vite/deps/@tanstack_react-query.js",
    ];

    for (const p of depPaths) {
      const depUrl = `${DEV_URL}${p}`;
      const result = await fetchAndCheck(depUrl, `Vite dep ${p}`);
      if (!result.ok) failed = true;
    }

    // 6. If root HTML came back, do a lightweight blank-screen heuristic
    if (root.body) {
      const hasScript = root.body.includes("<script");
      const hasDivRoot = root.body.includes('id="root"') || root.body.includes('id="app"');
      const hasBodyContent = root.body.replace(/\s|<script[^>]*>[\s\S]*?<\/script>/gi, "").length > 50;
      if (!hasScript && !hasBodyContent) {
        error("Root page HTML looks empty (no scripts and no body content).");
        failed = true;
      } else {
        log("Root page HTML has content.", "green");
      }
    }

    // 7. Summary
    log("", "reset");
    if (failed) {
      log("=".repeat(60), "red");
      log("SMOKE TEST FAILED", "red");
      log("=".repeat(60), "red");
    } else {
      log("=".repeat(60), "green");
      log("SMOKE TEST PASSED", "green");
      log("=".repeat(60), "green");
    }
  } finally {
    // 8. Kill server
    log("Shutting down dev server …", "yellow");
    server.kill("SIGTERM");
    await setTimeout(2000);
    if (!serverExited) {
      server.kill("SIGKILL");
    }
  }

  process.exit(failed ? 1 : 0);
}

runSmokeTest().catch((e) => {
  error(e.message);
  process.exit(1);
});
