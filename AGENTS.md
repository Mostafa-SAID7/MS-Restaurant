# Base44 Dev Environment

## Stack
- Frontend-only Vite + TanStack Start (SSR) + React 19 + TypeScript app.
- Package manager: **bun** (`bun.lock`, `bunfig.toml`). No backend, no database, no external secrets.

## Running
- `docker compose -f docker-compose.base44.yml up -d`
- Web entry point on host port **3000** (`oven/bun:1` base, source bind-mounted at `/app`, `node_modules` in a named volume).
- Dev command: `bun run dev --port 3000 --host 0.0.0.0` (live reload via Vite).

## Quirks
- Vite blocks the preview's external hostname by default → `vite.config.ts` sets `server.allowedHosts: true`. Keep this or the preview 403s.
- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`'s `defineConfig`; do NOT re-add plugins it already bundles (react, tailwind, tanstackStart, etc.) — see the file's header comment.

## Verify
- `curl -sf -H "Host: 3000-${BASE44_PUBLIC_HOST_SUFFIX}" http://localhost:3000/` returns the app HTML (200).
