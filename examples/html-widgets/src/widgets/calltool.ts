/**
 * CallTool widget - calls a "refresh" tool on the bot and displays the result.
 *
 * Protocol flow:
 *   1. User clicks "Refresh" button
 *   2. Widget sends JSON-RPC request: { method: "tools/call", params: { name: "refresh" } }
 *      via window.parent.postMessage to the Teams host
 *   3. Teams routes this as an htmlwidget/calltool invoke activity to the bot
 *   4. Bot handles the invoke and returns a CallToolResult
 *   5. Teams delivers the result back to the widget iframe as a JSON-RPC response
 *   6. Widget updates the UI with the result
 *
 * The MCP Apps protocol boilerplate (ui/initialize handshake) is auto-injected
 * by injectWidgetProtocol() via the SDK builders.
 */
export const CALLTOOL_WIDGET_HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{overflow:auto}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  padding:16px;background:#fff;color:#242424;font-size:13px}
h3{margin:0 0 8px 0}
p{margin:0 0 12px 0;color:#666}
button{padding:8px 16px;background:#5b5fc7;color:#fff;border:none;border-radius:4px;cursor:pointer}
button:hover{background:#4b4fb7}
#result{margin-top:12px;padding:8px;background:#f5f5f5;border-radius:4px}
</style></head><body>
<h3>CallTool Widget</h3>
<p>Click Refresh to call the bot's "refresh" tool.</p>
<button id="refreshBtn">Refresh</button>
<div id="result">Waiting for action...</div>
<script>
(function() {
  var callId = 0;

  // Send a tools/call JSON-RPC request when the button is clicked
  document.getElementById('refreshBtn').addEventListener('click', function() {
    var id = 'call-' + (++callId);
    document.getElementById('result').textContent = 'Calling refresh...';
    window.parent.postMessage({
      jsonrpc: '2.0',
      id: id,
      method: 'tools/call',
      params: { name: 'refresh', arguments: {} }
    }, '*');
  });

  // Listen for JSON-RPC responses from the host
  window.addEventListener('message', function(e) {
    var d = e.data;
    if (d && d.jsonrpc === '2.0' && d.id && typeof d.id === 'string' && d.id.startsWith('call-')) {
      if (d.result) document.getElementById('result').textContent = JSON.stringify(d.result);
      if (d.error) document.getElementById('result').textContent = 'Error: ' + JSON.stringify(d.error);
    }
  });
})()
</script>
</body></html>`;
