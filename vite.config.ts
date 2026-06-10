import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  vite: {
    optimizeDeps: {
      // Prevent transient blank screens when the browser asks for a dependency
      // URL from the previous optimization run while Vite is re-bundling deps.
      ignoreOutdatedRequests: true,
    },
  },
});
