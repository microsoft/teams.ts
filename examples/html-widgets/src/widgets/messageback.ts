/**
 * MessageBack widget - sends a messageBack action to the bot.
 *
 * Uses the ui/message method to send a message to the conversation,
 * similar to messageBack in Adaptive Cards. The example bot uses
 * injectWidgetProtocol() automatically via the builders.
 */
export const MESSAGEBACK_WIDGET_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:auto}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;background:#fff;color:#242424;font-size:13px}h3{margin:0 0 8px 0}p{margin:0 0 12px 0;color:#666}button{padding:8px 16px;background:#0078d4;color:#fff;border:none;border-radius:4px;cursor:pointer}button:hover{background:#006cbd}#status{margin-top:12px;color:#666}</style></head><body><h3>MessageBack Widget</h3><p>Click the button to send a messageBack to the bot.</p><button id="msgBtn">Send MessageBack</button><div id="status"></div><script>(function(){document.getElementById('msgBtn').addEventListener('click',function(){var msgId='msg-'+Math.random().toString(36).slice(2);document.getElementById('status').textContent='Sending messageBack...';window.parent.postMessage({jsonrpc:'2.0',id:msgId,method:'ui/message',params:{role:'user',content:[{type:'text',text:'Hello from the widget!'}]}},'*');document.getElementById('status').textContent='MessageBack sent!';});})()</script></body></html>`;
