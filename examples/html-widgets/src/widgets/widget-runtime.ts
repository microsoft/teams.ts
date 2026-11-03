/**
 * Shared widget runtime for the example widgets.
 *
 * Widgets own the MCP Apps handshake and the height reporting.
 * The Teams SDK sends the widget HTML exactly as written.
 *
 * `buildWidgetHtml` wraps a widget body in a single `#root` element and appends a script that:
 *   1. Sends `ui/initialize` (protocolVersion 2026-01-26, appInfo, appCapabilities).
 *   2. Waits for the response, then sends `ui/notifications/initialized`.
 *   3. Reports the height of `#root` with `ui/notifications/size-changed` after the handshake and on every change.
 *
 * Without a height reporter the host leaves a widget at about 150px.
 * The reporter observes one root element and measures `getBoundingClientRect().height` unrounded.
 * It never uses `scrollHeight`, `100vh` or `height: 100%`.
 *
 * The script exposes `window.widgetReady`, a promise that resolves with the `ui/initialize` result once the handshake completes.
 * It rejects if the host answers `ui/initialize` with an error.
 * The handshake and height reporter exist only in documents built by {@link buildWidgetHtml}. Widget HTML that does not use it must implement both itself.
 */

const MCP_PROTOCOL_VERSION = '2026-01-26';

const BASE_CSS = `
*{box-sizing:border-box}
html,body{margin:0;padding:0}
#root{display:flow-root;padding:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fff;color:#242424;font-size:13px}
`;

function runtimeScript(appName: string, appCapabilities: object): string {
  const info = JSON.stringify({ name: appName, version: '1.0.0' }).replace(/</g, '\\u003c');
  const caps = JSON.stringify(appCapabilities);
  return `
(function () {
  var root = document.getElementById('root');
  var initId = 'init-' + Math.random().toString(36).slice(2);

  function post(message) {
    window.parent.postMessage(message, '*');
  }

  function reportSize() {
    post({
      jsonrpc: '2.0',
      method: 'ui/notifications/size-changed',
      params: { height: root.getBoundingClientRect().height }
    });
  }

  window.widgetReady = new Promise(function (resolve, reject) {
    function onMessage(event) {
      var data = event.data;
      if (!data || data.jsonrpc !== '2.0' || data.id !== initId) return;
      window.removeEventListener('message', onMessage);
      if (!data.result) {
        reject(new Error(data.error && data.error.message ? data.error.message : 'ui/initialize failed'));
        return;
      }
      post({ jsonrpc: '2.0', method: 'ui/notifications/initialized', params: {} });
      new ResizeObserver(reportSize).observe(root);
      resolve(data.result);
    }
    window.addEventListener('message', onMessage);
  });

  post({
    jsonrpc: '2.0',
    id: initId,
    method: 'ui/initialize',
    params: {
      protocolVersion: '${MCP_PROTOCOL_VERSION}',
      appInfo: ${info},
      appCapabilities: ${caps}
    }
  });
})();
`;
}

/**
 * Options for {@link buildWidgetHtml}.
 */
export interface IWidgetHtmlOptions {
  /** The app name sent in `appInfo` during `ui/initialize`. */
  appName: string;

  /** Capabilities sent as `appCapabilities` during `ui/initialize`. */
  appCapabilities?: object;

  /** Widget-specific CSS, added after the shared base styles. */
  css?: string;

  /** Widget markup. It is placed inside the `#root` element. */
  body: string;

  /** Widget script. It runs after the shared runtime, so `window.widgetReady` is available. */
  script?: string;
}

/**
 * Builds a complete widget document with the shared handshake and height reporter.
 */
export function buildWidgetHtml(options: IWidgetHtmlOptions): string {
  const script = options.script ? `<script>${options.script}</script>` : '';
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>${BASE_CSS}${options.css ?? ''}</style></head><body>
<div id="root">
${options.body}
</div>
<script>${runtimeScript(options.appName, options.appCapabilities ?? {})}</script>
${script}
</body></html>`;
}
