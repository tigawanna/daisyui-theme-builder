/// <reference types="vitest" />

import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import analyze from "rollup-plugin-analyzer";
// import { splashScreen } from "vite-plugin-splash-screen";

// https://vitejs.dev/config/
const _plugins = [react(), TanStackRouterVite(), tsconfigPaths(),
analyze({
    // highlight the modules with size > 40kb
    filter(moduleObject) {
      return moduleObject.size > 40000;
    },
  }),
// splashScreen({
//   splashBg: "#4D3119",
//   loaderBg: "#D2BA79",
//   loaderType: "dots",
//   logoSrc: "logo.svg",
// }),
];
if(process.env.MILLION_LINT) {
  _plugins.unshift(MillionLint.vite())
  
}
export default defineConfig({
  plugins: _plugins,
  server: {
    host: true,
    port: 5000
  },
  test: {
    globals: true
  }
});
