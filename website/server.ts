import express from "express";
import { router } from "./router.js";

const app = express();

app.use("*", router);

const port = 4002;

app.listen(port);

console.info(`website server running at http://localhost:${port}/`);
