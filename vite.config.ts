/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import analyze from "rollup-plugin-analyzer";
import { splashScreen } from "vite-plugin-splash-screen";

const ReactCompilerConfig = {

};

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    TanStackRouterVite(),
    tsconfigPaths(),

    splashScreen({
      splashBg: "#4D3119",
      loaderBg: "#D2BA79",
      loaderType: "dots",
      logoSrc: "logo.svg",
    }),
    analyze({
      // highlight the modules with size > 40kb
      filter(moduleObject) {
        return moduleObject.size > 5000;
      },
    }),
  ],
  server: {
    host: true,
    port: 5000,
  },
  test: {
    globals: true,
  },
});
