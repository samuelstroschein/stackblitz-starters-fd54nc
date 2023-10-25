// vite.config.ts
import { defineConfig } from "file:///home/projects/stackblitz-starters-bjn9qd/node_modules/vite/dist/node/index.js";
import solid from "file:///home/projects/stackblitz-starters-bjn9qd/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import { ssr as vikePlugin } from "file:///home/projects/stackblitz-starters-bjn9qd/node_modules/vike/dist/esm/node/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [solid({ ssr: true }), vikePlugin()],
  build: {
    // target is es2022 to support top level await
    // https://caniuse.com/?search=top%20level%20await
    target: "es2022"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0cy9zdGFja2JsaXR6LXN0YXJ0ZXJzLWJqbjlxZC93ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0cy9zdGFja2JsaXR6LXN0YXJ0ZXJzLWJqbjlxZC93ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3RzL3N0YWNrYmxpdHotc3RhcnRlcnMtYmpuOXFkL3dlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZCBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG5pbXBvcnQgeyBzc3IgYXMgdmlrZVBsdWdpbiB9IGZyb20gJ3Zpa2UvcGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3NvbGlkKHsgc3NyOiB0cnVlIH0pLCB2aWtlUGx1Z2luKCldLFxuICBidWlsZDoge1xuICAgIC8vIHRhcmdldCBpcyBlczIwMjIgdG8gc3VwcG9ydCB0b3AgbGV2ZWwgYXdhaXRcbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLz9zZWFyY2g9dG9wJTIwbGV2ZWwlMjBhd2FpdFxuICAgIHRhcmdldDogJ2VzMjAyMicsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsT0FBTyxrQkFBa0I7QUFFbEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUFBLEVBQzVDLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHTCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==