import { buildWidgetHtml } from './widget-runtime';

/**
 * Host Context widget that displays the `hostContext` received during `ui/initialize`.
 * It shows theme, display mode, container dimensions, locale and more.
 * It also listens for `ui/notifications/host-context-changed`.
 *
 * The shared runtime performs the handshake and exposes the result as `window.widgetReady`.
 */
export const HOST_CONTEXT_WIDGET_HTML = buildWidgetHtml({
  appName: 'host-context-inspector',
  css: `
h3{margin:0 0 8px}
.section{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px}
.section h4{margin:0 0 4px;font-size:12px;color:#333}
pre{margin:0;white-space:pre-wrap;word-break:break-all;font-family:monospace;font-size:11px;color:#555}
.update{margin-top:8px;padding:6px;background:#fff3cd;border-radius:4px;font-size:11px}
#updates{max-height:250px;overflow-y:auto}
`,
  body: `
<h3>Host Context Inspector</h3>
<p>Displays the <code>hostContext</code> from the <code>ui/initialize</code> response and listens for changes.</p>
<div class="section">
  <h4>Initialize Result</h4>
  <pre id="initResult">Waiting for initialize...</pre>
</div>
<div class="section">
  <h4>Host Context</h4>
  <pre id="hostContext">-</pre>
</div>
<div class="section">
  <h4>Host Capabilities</h4>
  <pre id="hostCaps">-</pre>
</div>
<div id="updates"></div>
`,
  script: `
window.widgetReady.then((result) => {
  document.getElementById('initResult').textContent = JSON.stringify(result, null, 2);
  const ctx = result.hostContext;
  const caps = result.hostCapabilities;
  document.getElementById('hostContext').textContent = ctx ? JSON.stringify(ctx, null, 2) : '(none provided)';
  document.getElementById('hostCaps').textContent = caps ? JSON.stringify(caps, null, 2) : '(none provided)';
}).catch((e) => {
  document.getElementById('initResult').textContent = 'Initialize failed: ' + e.message;
});

window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.method !== 'ui/notifications/host-context-changed') return;

  const div = document.createElement('div');
  div.className = 'update';
  div.textContent = '[' + new Date().toLocaleTimeString() + '] host-context-changed: ' + JSON.stringify(data.params);
  document.getElementById('updates').appendChild(div);

  if (data.params) {
    document.getElementById('hostContext').textContent = JSON.stringify(data.params, null, 2);
  }
});
`,
});
