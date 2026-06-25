/**
 * Simple static widget - no callbacks, no interactivity.
 * Verifies that the host renders the HTML correctly.
 *
 * This is raw HTML without the MCP Apps protocol. The example bot uses
 * injectWidgetProtocol() automatically via the builders.
 */
export const SIMPLE_WIDGET_HTML = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:auto}body{font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;padding:16px;background:#fff;color:#242424;font-size:13px}h3{margin:0 0 8px 0;color:#333}p{margin:0;color:#666}.status{margin-top:12px;padding:8px;background:#f0f9ff;border-radius:4px}</style></head><body><h3>Simple HTML Widget</h3><p>This is a static HTML widget rendered inside a Teams message. No callbacks are needed.</p><div class="status"><strong>Status:</strong> Rendered successfully</div></body></html>';
