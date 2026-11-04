import { buildWidgetHtml } from './widget-runtime';

/**
 * Update Model Context widget that exercises the `ui/update-model-context` method.
 * It sends structured context to the host for use by AI in future turns.
 *
 * Protocol flow:
 *   1. The user edits the context JSON and clicks a button.
 *   2. The widget posts a `ui/update-model-context` request with `content` and/or `structuredContent`.
 *   3. Teams stores the context for use in subsequent turns.
 *   4. The host responds with success or an error.
 */
export const UPDATE_CONTEXT_WIDGET_HTML = buildWidgetHtml({
  appName: 'update-context-widget',
  css: `
h3{margin:0 0 8px}
button{margin:4px 4px 4px 0;padding:6px 12px;border:1px solid #ccc;border-radius:4px;background:#f5f5f5;color:inherit;cursor:pointer;font-size:12px}
button:hover{background:#e0e0e0}
textarea{display:block;width:100%;height:60px;margin:8px 0;padding:8px;border:1px solid #ccc;border-radius:4px;font-family:monospace;font-size:11px;resize:vertical}
#status{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px;white-space:pre-wrap;font-family:monospace;font-size:11px}
`,
  body: `
<h3>Update Model Context Widget</h3>
<p>Tests <code>ui/update-model-context</code>. It sends context for AI to use in future turns.</p>
<textarea id="contextInput">{"userPreference": "dark mode", "currentPage": "settings"}</textarea>
<div>
  <button onclick="sendStructuredContext()">Send Structured Context</button>
  <button onclick="sendTextContext()">Send Text Context</button>
  <button onclick="sendBoth()">Send Both</button>
</div>
<div id="status">Waiting...</div>
`,
  script: `
let nextId = 100;
const pending = {};

window.addEventListener('message', (event) => {
  if (event.source !== window.parent) return;
  const data = event.data;
  if (data?.id && pending[data.id]) {
    const cb = pending[data.id];
    delete pending[data.id];
    cb(data);
  }
});

function sendRequest(method, params) {
  const id = nextId++;
  return new Promise((resolve) => {
    pending[id] = resolve;
    window.parent.postMessage({ jsonrpc: '2.0', id, method, params }, '*');
  });
}

function parseInput(el) {
  try {
    return JSON.parse(document.getElementById('contextInput').value);
  } catch (e) {
    el.textContent = 'Invalid JSON in textarea';
    return undefined;
  }
}

async function update(label, params, doneText) {
  const el = document.getElementById('status');
  el.textContent = 'Sending ' + label + '...';
  try {
    await window.widgetReady;
    const response = await sendRequest('ui/update-model-context', params);
    el.textContent = response.error ? 'Error: ' + JSON.stringify(response.error) : doneText;
  } catch (e) {
    el.textContent = 'Exception: ' + e.message;
  }
}

async function sendStructuredContext() {
  const parsed = parseInput(document.getElementById('status'));
  if (parsed === undefined) return;
  await update('structured context', { structuredContent: parsed }, 'Success! Context updated with structured data.');
}

async function sendTextContext() {
  await update(
    'text context',
    { content: [{ type: 'text', text: 'User is viewing the settings page and prefers dark mode.' }] },
    'Success! Context updated with text content.'
  );
}

async function sendBoth() {
  const parsed = parseInput(document.getElementById('status'));
  if (parsed === undefined) return;
  await update(
    'text and structured context',
    { content: [{ type: 'text', text: 'User updated their preferences.' }], structuredContent: parsed },
    'Success! Context updated with both text and structured data.'
  );
}
`,
});
