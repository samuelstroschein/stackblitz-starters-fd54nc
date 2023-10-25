import { escapeInject, dangerouslySkipEscape } from 'vike/server';

export async function render(pageContext) {
  const { Page } = pageContext;

  return escapeInject`<html>
    <body>
      <div id="root">
        ${dangerouslySkipEscape(Page())}
      </div>
    </body>
  </html>`;
}
