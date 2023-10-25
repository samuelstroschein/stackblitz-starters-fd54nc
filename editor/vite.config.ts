import { defineConfig } from "vite";
import { ssr as vikePlugin } from "vike/plugin";

export default defineConfig({
  plugins: [vikePlugin()],
});
