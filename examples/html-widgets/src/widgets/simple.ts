import { buildWidgetHtml } from './widget-runtime';

/**
 * Simple static widget with no callbacks.
 * The shared runtime completes the handshake and reports the height, so the host sizes the iframe to the content.
 */
export const SIMPLE_WIDGET_HTML = buildWidgetHtml({
  appName: 'simple-widget',
  css: `
h3{margin:0 0 8px 0;color:#333}
p{margin:0;color:#666}
.status{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px}
`,
  body: `
<h3>Simple HTML Widget</h3>
<p>This is a static HTML widget rendered inside a Teams message. No callbacks are needed.</p>
<div class="status"><strong>Status:</strong> Rendered successfully</div>
`,
});
