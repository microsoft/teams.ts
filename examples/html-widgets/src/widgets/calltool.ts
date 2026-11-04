import { buildWidgetHtml } from './widget-runtime';

/**
 * CallTool widget that calls a "refresh" tool on the bot and displays the result.
 *
 * Protocol flow:
 *   1. The user clicks "Refresh".
 *   2. The widget posts a `tools/call` JSON-RPC request to the Teams host.
 *   3. Teams routes it as an `htmlwidget/calltool` invoke activity to the bot.
 *   4. The bot returns a call tool result.
 *   5. Teams delivers the result to the widget as a JSON-RPC response.
 */
export const CALLTOOL_WIDGET_HTML = buildWidgetHtml({
  appName: 'calltool-widget',
  css: `
h3{margin:0 0 8px 0}
p{margin:0 0 12px 0;color:#666}
button{padding:8px 16px;background:#5b5fc7;color:#fff;border:none;border-radius:4px;cursor:pointer}
button:hover{background:#4b4fb7}
#result{margin-top:12px;padding:8px;background:#f5f5f5;border-radius:4px;word-break:break-all}
`,
  body: `
<h3>CallTool Widget</h3>
<p>Click Refresh to call the bot's "refresh" tool.</p>
<button id="refreshBtn">Refresh</button>
<div id="result">Waiting for action...</div>
`,
  script: `
(function() {
  var callId = 0;

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

  window.addEventListener('message', function(e) {
    if (e.source !== window.parent) return;
    var d = e.data;
    if (d && d.jsonrpc === '2.0' && typeof d.id === 'string' && d.id.startsWith('call-')) {
      if (d.result) document.getElementById('result').textContent = JSON.stringify(d.result);
      if (d.error) document.getElementById('result').textContent = 'Error: ' + JSON.stringify(d.error);
    }
  });
})()
`,
});
