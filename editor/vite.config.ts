import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { ssr as vikePlugin } from 'vike/plugin';

export default defineConfig({
  plugins: [solid({ ssr: true }), vikePlugin()],
  build: {
    // target is es2022 to support top level await
    // https://caniuse.com/?search=top%20level%20await
    target: 'es2022',
  },
});
