/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import analyze from "rollup-plugin-analyzer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tsconfigPaths(),    analyze({
      // highlight the modules with size > 40kb
      filter(moduleObject) {
        return moduleObject.size > 5000;
      },
      
    }),],
  server: {
    host: true,
    port: 5000,
  },
  test:{
    globals: true,
  }
});
