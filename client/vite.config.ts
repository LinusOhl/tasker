import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const _plugins = [react(), TanStackRouterVite()];
export default defineConfig({
  plugins: _plugins,
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]--[hash:base64:5]",
    },
  },
});
