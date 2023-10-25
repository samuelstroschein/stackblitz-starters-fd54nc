import express from "express";
import { router as editorRouter } from "../editor/router.js";
import { router as websiteRouter } from "../website/router.js";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/editor",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: false,
    pathRewrite: { "^/editor": "/" },
  })
);

app.use(
  "*",
  createProxyMiddleware({ target: "http://localhost:4002", changeOrigin: true })
);

// ----------------- START SERVER -----------------
const port = 4000;
app.listen(port);
console.info(`Server running at http://localhost:${port}/`);
