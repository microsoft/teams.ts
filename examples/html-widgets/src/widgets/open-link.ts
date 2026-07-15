/**
 * Open Link widget - tests ui/open-link method.
 * Clicking a button asks the host to open a URL in the user's browser.
 *
 * Protocol flow:
 *   1. User clicks a button with a URL
 *   2. Widget sends JSON-RPC request: { method: "ui/open-link", params: { url } }
 *   3. Teams host opens the URL in the user's default browser
 *   4. Host responds with success/error
 */
export const OPEN_LINK_WIDGET_HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;overflow:auto}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;background:#fff;color:#242424;font-size:13px}
h3{margin:0 0 8px}
button{margin:4px 4px 4px 0;padding:6px 12px;border:1px solid #ccc;border-radius:4px;background:#f5f5f5;cursor:pointer;font-size:12px}
button:hover{background:#e0e0e0}
#status{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px;white-space:pre-wrap;font-family:monospace;font-size:11px}
</style></head><body>
<h3>Open Link Widget</h3>
<p>Tests the <code>ui/open-link</code> method (host opens a URL).</p>
<div style="margin-top:12px">
  <button onclick="openLink('https://github.com/modelcontextprotocol/ext-apps')">Open MCP Apps Repo</button>
  <button onclick="openLink('https://learn.microsoft.com/en-us/microsoftteams/')">Open Teams Docs</button>
  <button onclick="openLink('not-a-valid-url')">Open Invalid URL (error test)</button>
</div>
<div id="status">Waiting...</div>
<script>
let nextId = 100;
const pending = {};

window.addEventListener('message', (event) => {
  const data = event.data;
  if (data?.id && pending[data.id]) {
    pending[data.id](data);
  }
});

function sendRequest(method, params) {
  const id = nextId++;
  return new Promise((resolve) => {
    pending[id] = resolve;
    window.parent.postMessage({ jsonrpc: '2.0', id, method, params }, '*');
  });
}

async function openLink(url) {
  const el = document.getElementById('status');
  el.textContent = 'Opening: ' + url + '...';
  try {
    const response = await sendRequest('ui/open-link', { url });
    if (response.error) {
      el.textContent = 'Error: ' + JSON.stringify(response.error);
    } else {
      el.textContent = 'Success! Host opened: ' + url;
    }
  } catch (e) {
    el.textContent = 'Exception: ' + e.message;
  }
}
</script>
</body></html>`;
