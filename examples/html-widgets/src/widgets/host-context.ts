/**
 * Host Context widget - displays the hostContext received during ui/initialize.
 * Shows theme, display mode, container dimensions, locale, etc.
 * Also listens for ui/notifications/host-context-changed.
 *
 * Protocol flow:
 *   1. SDK-injected protocol sends ui/initialize to the host
 *   2. Host responds with hostContext (theme, dimensions, locale) and hostCapabilities
 *   3. Widget displays the received context
 *   4. Widget listens for ui/notifications/host-context-changed for live updates
 */
export const HOST_CONTEXT_WIDGET_HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;overflow:auto}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;background:#fff;color:#242424;font-size:13px}
h3{margin:0 0 8px}
.section{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px}
.section h4{margin:0 0 4px;font-size:12px;color:#333}
pre{white-space:pre-wrap;word-break:break-all;font-family:monospace;font-size:11px;color:#555}
.update{margin-top:8px;padding:6px;background:#fff3cd;border-radius:4px;font-size:11px}
</style></head><body>
<h3>Host Context Inspector</h3>
<p>Displays the <code>hostContext</code> from <code>ui/initialize</code> response and listens for changes.</p>
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
<script>
let nextId = 100;
const pending = {};

window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  // Handle responses to our requests
  if (data.id && pending[data.id]) {
    pending[data.id](data);
    return;
  }

  // Handle notifications from host
  if (data.method === 'ui/notifications/host-context-changed') {
    const el = document.getElementById('updates');
    const div = document.createElement('div');
    div.className = 'update';
    div.textContent = '[' + new Date().toLocaleTimeString() + '] host-context-changed: ' + JSON.stringify(data.params);
    el.appendChild(div);

    // Update main display
    if (data.params) {
      document.getElementById('hostContext').textContent = JSON.stringify(data.params, null, 2);
    }
  }
});

function sendRequest(method, params) {
  const id = nextId++;
  return new Promise((resolve) => {
    pending[id] = resolve;
    window.parent.postMessage({ jsonrpc: '2.0', id, method, params }, '*');
  });
}

async function init() {
  const response = await sendRequest('ui/initialize', {
    protocolVersion: '2026-01-26',
    appInfo: { name: 'host-context-inspector', version: '1.0.0' },
    appCapabilities: {}
  });

  document.getElementById('initResult').textContent = JSON.stringify(response.result || response.error, null, 2);

  if (response.result) {
    const ctx = response.result.hostContext;
    const caps = response.result.hostCapabilities;
    document.getElementById('hostContext').textContent = ctx ? JSON.stringify(ctx, null, 2) : '(none provided)';
    document.getElementById('hostCaps').textContent = caps ? JSON.stringify(caps, null, 2) : '(none provided)';
  }

  // Send initialized notification
  window.parent.postMessage({ jsonrpc: '2.0', method: 'ui/notifications/initialized', params: {} }, '*');
}

init();
</script>
</body></html>`;
