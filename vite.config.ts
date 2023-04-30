import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";

import path, { resolve } from "path";

import {manifest} from "./src/manifest";

const srcDir = resolve(__dirname, "src");
const newtabDir = resolve(srcDir, "newtab");

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        newtab: resolve(newtabDir, "index.html"),
      }}
  },
  plugins: [react(), crx({ manifest })],
  server: { port: 3000, hmr: { port: 3000 } },
});
