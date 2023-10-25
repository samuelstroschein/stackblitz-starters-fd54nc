import express from 'express';
import { router as editorRouter } from '../editor/router.js';
import { router as websiteRouter } from '../website/router.js';

const app = express();

app.use('*', editorRouter);
app.use('*', websiteRouter);

// ----------------- START SERVER -----------------
const port = 3000;
app.listen(port);
console.info(`Server running at http://localhost:${port}/`);
