/**
 * Fullscreen widget - requests fullscreen display mode from the host.
 *
 * Protocol flow:
 *   1. User clicks "Go Fullscreen" button
 *   2. Widget sends JSON-RPC request: { method: "ui/request-display-mode", params: { mode: "fullscreen" } }
 *   3. Teams expands the widget iframe to fill available space
 *   4. Host responds with the new mode, widget updates its label
 *
 * The MCP Apps protocol boilerplate (ui/initialize handshake) is auto-injected
 * by injectWidgetProtocol() via the SDK builders.
 */
export const FULLSCREEN_WIDGET_HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;overflow:auto}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  padding:16px;background:#fff;color:#242424;font-size:13px}
h3{margin:0 0 8px 0}
p{margin:0 0 12px 0;color:#666}
button{padding:8px 16px;background:#107c10;color:#fff;border:none;border-radius:4px;cursor:pointer}
button:hover{background:#0e6b0e}
#content{margin-top:12px;padding:16px;background:#f0fff0;border-radius:4px}
#modeLabel{font-weight:600}
</style></head><body>
<h3>Fullscreen Widget</h3>
<p>Click the button to request fullscreen mode from Teams.</p>
<button id="fsBtn">Go Fullscreen</button>
<div id="content">
  <p>In fullscreen mode, this widget will expand to fill the available space.</p>
  <p>Current mode: <span id="modeLabel">inline</span></p>
</div>
<script>
(function() {
  // Request fullscreen display mode from the Teams host
  document.getElementById('fsBtn').addEventListener('click', function() {
    var id = 'fs-' + Math.random().toString(36).slice(2);
    window.parent.postMessage({
      jsonrpc: '2.0',
      id: id,
      method: 'ui/request-display-mode',
      params: { mode: 'fullscreen' }
    }, '*');
  });

  // Listen for display mode change responses
  window.addEventListener('message', function(e) {
    var d = e.data;
    if (d && d.jsonrpc === '2.0') {
      if (d.result && d.result.mode) document.getElementById('modeLabel').textContent = d.result.mode;
      if (d.error) document.getElementById('modeLabel').textContent = 'Error: ' + JSON.stringify(d.error);
    }
  });
})()
</script>
</body></html>`;
