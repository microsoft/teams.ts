/**
 * Update Model Context widget - tests ui/update-model-context method.
 * Sends structured context to the host that can be used by AI in future turns.
 */
export const UPDATE_CONTEXT_WIDGET_HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;overflow:auto}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;background:#fff;color:#242424;font-size:13px}
h3{margin:0 0 8px}
button{margin:4px 4px 4px 0;padding:6px 12px;border:1px solid #ccc;border-radius:4px;background:#f5f5f5;cursor:pointer;font-size:12px}
button:hover{background:#e0e0e0}
textarea{width:100%;height:60px;margin:8px 0;padding:8px;border:1px solid #ccc;border-radius:4px;font-family:monospace;font-size:11px;resize:vertical}
#status{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px;white-space:pre-wrap;font-family:monospace;font-size:11px}
</style></head><body>
<h3>Update Model Context Widget</h3>
<p>Tests <code>ui/update-model-context</code> - sends context for AI to use in future turns.</p>
<textarea id="contextInput">{"userPreference": "dark mode", "currentPage": "settings"}</textarea>
<div>
  <button onclick="sendStructuredContext()">Send Structured Context</button>
  <button onclick="sendTextContext()">Send Text Context</button>
  <button onclick="sendBoth()">Send Both</button>
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

async function sendStructuredContext() {
  const el = document.getElementById('status');
  const input = document.getElementById('contextInput').value;
  let parsed;
  try { parsed = JSON.parse(input); } catch (e) {
    el.textContent = 'Invalid JSON in textarea';
    return;
  }
  el.textContent = 'Sending structured context...';
  const response = await sendRequest('ui/update-model-context', {
    structuredContent: parsed
  });
  el.textContent = response.error
    ? 'Error: ' + JSON.stringify(response.error)
    : 'Success! Context updated with structured data.';
}

async function sendTextContext() {
  const el = document.getElementById('status');
  el.textContent = 'Sending text context...';
  const response = await sendRequest('ui/update-model-context', {
    content: [{ type: 'text', text: 'User is viewing the settings page and prefers dark mode.' }]
  });
  el.textContent = response.error
    ? 'Error: ' + JSON.stringify(response.error)
    : 'Success! Context updated with text content.';
}

async function sendBoth() {
  const el = document.getElementById('status');
  const input = document.getElementById('contextInput').value;
  let parsed;
  try { parsed = JSON.parse(input); } catch (e) {
    el.textContent = 'Invalid JSON in textarea';
    return;
  }
  el.textContent = 'Sending both text + structured context...';
  const response = await sendRequest('ui/update-model-context', {
    content: [{ type: 'text', text: 'User updated their preferences.' }],
    structuredContent: parsed
  });
  el.textContent = response.error
    ? 'Error: ' + JSON.stringify(response.error)
    : 'Success! Context updated with both text and structured data.';
}
</script>
</body></html>`;
