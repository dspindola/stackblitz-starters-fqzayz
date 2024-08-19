import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwind from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    react({
      devTarget: "es2022",
      jsxImportSource: "react",
    }),
    tsconfigPaths(),
    TanStackRouterVite({
      routesDirectory: "app/routes",
      experimental: {
        enableCodeSplitting: true,
      },
      generatedRouteTree: "app/routeTree.gen.ts",
    }),
    tailwind(),
  ],
  esbuild: {
    sourcemap: true,
    jsxImportSource: "react",
    platform: "browser",
  },
  build: {
    sourcemap: true,
  },
  experimental: {
    hmrPartialAccept: true,
  },
  mode: Bun.env.NODE_ENV,
  server: {
    port: 8080,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 8080,
    host: "0.0.0.0",
  },
  worker: {
    format: "es",
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: [
      "react-dom/client",
      "@tanstack/react-router",
      "@tanstack/react-store",
    ],
  },
  envPrefix: ["BUN_", "TAILWIND_"],
});
