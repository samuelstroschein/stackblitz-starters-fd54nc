import express, { Router } from 'express';
import { renderPage } from 'vike/server';
import sirv from 'sirv';

export const router: Router = express.Router();

// import server code https://github.com/brillout/vite-plugin-ssr/issues/403
const rootPath = new URL('./', import.meta.url).pathname;
await import(`${rootPath}/dist/server/importBuild.cjs`);
router.use(sirv(`${rootPath}/dist/client`));

router.get('*', (request, response, next) => {
  console.log('editor router', request.originalUrl);
  renderPage({
    urlOriginal: request.originalUrl,
  })
    .then((pageContext) => {
      console.log('editor router page ids', pageContext._allPageIds);
      if (pageContext.httpResponse === null) {
        next();
      } else {
        const { body, headers, statusCode } = pageContext.httpResponse;
        for (const [name, value] of headers) response.setHeader(name, value);
        response.status(statusCode).send(body);
      }
    })
    // pass the error to expresses error handling
    .catch((e) => {
      console.log(e);
    });
});
