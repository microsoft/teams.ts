import { buildWidgetHtml } from './widget-runtime';

/**
 * MessageBack widget that sends a message to the bot.
 *
 * Protocol flow:
 *   1. The user clicks "Send MessageBack".
 *   2. The widget posts a `ui/message` JSON-RPC request to the Teams host.
 *   3. Teams delivers it as a new message activity to the bot.
 *   4. The bot receives the content in `activity.value`.
 */
export const MESSAGEBACK_WIDGET_HTML = buildWidgetHtml({
  appName: 'messageback-widget',
  css: `
h3{margin:0 0 8px 0}
p{margin:0 0 12px 0;color:#666}
button{padding:8px 16px;background:#0078d4;color:#fff;border:none;border-radius:4px;cursor:pointer}
button:hover{background:#006cbd}
#status{margin-top:12px;color:#666}
`,
  body: `
<h3>MessageBack Widget</h3>
<p>Click the button to send a messageBack to the bot.</p>
<button id="msgBtn">Send MessageBack</button>
<div id="status"></div>
`,
  script: `
(function() {
  document.getElementById('msgBtn').addEventListener('click', function() {
    var msgId = 'msg-' + Math.random().toString(36).slice(2);
    document.getElementById('status').textContent = 'Sending messageBack...';
    window.parent.postMessage({
      jsonrpc: '2.0',
      id: msgId,
      method: 'ui/message',
      params: {
        role: 'user',
        content: [{ type: 'text', text: 'Hello from the widget!' }]
      }
    }, '*');
    document.getElementById('status').textContent = 'MessageBack sent!';
  });
})()
`,
});
