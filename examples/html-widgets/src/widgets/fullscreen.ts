import { buildWidgetHtml } from './widget-runtime';

/**
 * Fullscreen widget that requests fullscreen display mode from the host.
 *
 * Protocol flow:
 *   1. The user clicks "Go Fullscreen".
 *   2. The widget posts a `ui/request-display-mode` request with `{ mode: "fullscreen" }`.
 *   3. Teams expands the widget to fill the available space.
 *   4. The host responds with the new mode and the widget updates its label.
 */
export const FULLSCREEN_WIDGET_HTML = buildWidgetHtml({
  appName: 'fullscreen-widget',
  css: `
h3{margin:0 0 8px 0}
p{margin:0 0 12px 0;color:#666}
button{padding:8px 16px;background:#107c10;color:#fff;border:none;border-radius:4px;cursor:pointer}
button:hover{background:#0e6b0e}
#content{margin-top:12px;padding:16px;background:#f0fff0;border-radius:4px}
#modeLabel{font-weight:600}
`,
  body: `
<h3>Fullscreen Widget</h3>
<p>Click the button to request fullscreen mode from Teams.</p>
<button id="fsBtn">Go Fullscreen</button>
<div id="content">
  <p>In fullscreen mode, this widget will expand to fill the available space.</p>
  <p>Current mode: <span id="modeLabel">inline</span></p>
</div>
`,
  script: `
(function() {
  document.getElementById('fsBtn').addEventListener('click', function() {
    var id = 'fs-' + Math.random().toString(36).slice(2);
    window.parent.postMessage({
      jsonrpc: '2.0',
      id: id,
      method: 'ui/request-display-mode',
      params: { mode: 'fullscreen' }
    }, '*');
  });

  window.addEventListener('message', function(e) {
    var d = e.data;
    if (d && d.jsonrpc === '2.0' && typeof d.id === 'string' && d.id.startsWith('fs-')) {
      if (d.result && d.result.mode) document.getElementById('modeLabel').textContent = d.result.mode;
      if (d.error) document.getElementById('modeLabel').textContent = 'Error: ' + JSON.stringify(d.error);
    }
  });
})()
`,
});
