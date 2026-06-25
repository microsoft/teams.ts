import { IHtmlWidgetPayload } from '@microsoft/teams.api';

/**
 * The MCP Apps protocol version used for the widget init handshake.
 */
const MCP_PROTOCOL_VERSION = '2026-01-26';

/**
 * Validates an HTML widget payload, throwing if required fields are
 * missing or empty. This catches issues that would otherwise result
 * in a silent client-side render failure ("Couldn't load widget").
 */
function validateHtmlWidgetPayload(payload: IHtmlWidgetPayload): void {
  if (!payload.name?.trim()) {
    throw new Error('HTML widget payload requires a non-empty "name" field.');
  }

  if (!payload.html?.trim()) {
    throw new Error('HTML widget payload requires a non-empty "html" field.');
  }

  if (!payload.domain?.trim() || !payload.domain.startsWith('https://')) {
    throw new Error('HTML widget payload requires "domain" to be a valid URL starting with "https://".');
  }
}

/**
 * Known host notification types from the MCP Apps spec (`ui/notifications/*`).
 * These are the suffix portion of the full method name, e.g. 'tool-result'
 * maps to the JSON-RPC method `ui/notifications/tool-result`.
 *
 * @see MCP Apps Protocol (SEP-1865) - Notifications section
 */
type WidgetNotification =
  | 'tool-result'
  | 'tool-input'
  | 'tool-input-partial'
  | 'tool-cancelled'
  | 'host-context-changed'
  | 'resource-teardown'
  | (string & {});

/**
 * Options for building an HTML widget markdown string.
 */
export interface IHtmlWidgetMarkdownOptions {
  /**
   * Text to include before the widget code block.
   */
  before?: string;

  /**
   * Text to include after the widget code block.
   */
  after?: string;
}

/**
 * Options for injecting the MCP Apps protocol into widget HTML.
 */
export interface IInjectWidgetProtocolOptions {
  /**
   * The widget app name sent during ui/initialize.
   * @default 'widget'
   */
  name?: string;

  /**
   * The widget app version sent during ui/initialize.
   * @default '1.0.0'
   */
  version?: string;

  /**
   * Capabilities declared to the host during the `ui/initialize` handshake.
   * Sent as `appCapabilities` in the init request per the MCP Apps spec.
   */
  appCapabilities?: {
    /**
     * Display modes this widget supports. An array because a widget can
     * declare support for multiple modes (e.g. both inline and fullscreen).
     * The host uses this to determine which mode transitions to offer the user.
     *
     * Note: 'pip' is defined in the MCP Apps spec but not yet supported by Teams.
     *
     * @example ['inline', 'fullscreen']
     */
    availableDisplayModes?: Array<'inline' | 'fullscreen' | 'pip'>;
  };

  /**
   * Host notifications to listen for. These correspond to JSON-RPC methods
   * defined in the MCP Apps spec under `ui/notifications/*`. For each
   * notification included, define the matching `window.onX` callback in
   * your widget HTML to handle it.
   *
   * Known notifications (from the MCP Apps spec):
   * - `'tool-result'` (`ui/notifications/tool-result`) - define `window.onToolResult`
   * - `'tool-input'` (`ui/notifications/tool-input`) - define `window.onToolInput`
   * - `'tool-input-partial'` (`ui/notifications/tool-input-partial`) - define `window.onToolInputPartial`
   * - `'tool-cancelled'` (`ui/notifications/tool-cancelled`) - define `window.onToolCancelled`
   * - `'host-context-changed'` (`ui/notifications/host-context-changed`) - define `window.onHostContextChanged`
   * - `'resource-teardown'` (`ui/notifications/resource-teardown`) - define `window.onResourceTeardown`
   *
   * Unknown notification names are ignored (only the above are injected).
   *
   * @default [] (no notification hooks injected)
   */
  notifications?: WidgetNotification[];
}

/**
 * Explicit mapping of notification names to their window callback names.
 * Only notifications in this map will have hooks injected.
 *
 * Confirmed in Teams spec: tool-result, tool-input
 * Not yet available in Teams: tool-input-partial, tool-cancelled,
 * host-context-changed, resource-teardown
 */
const NOTIFICATION_CALLBACKS: Record<string, string> = {
  // Confirmed in Teams
  'tool-result': 'onToolResult',
  'tool-input': 'onToolInput',
  // MCP Apps spec (SEP-1865) - not yet available in Teams
  'tool-input-partial': 'onToolInputPartial',
  'tool-cancelled': 'onToolCancelled',
  'host-context-changed': 'onHostContextChanged',
  'resource-teardown': 'onResourceTeardown',
};

/**
 * Injects the MCP Apps protocol script into widget HTML.
 *
 * This is a convenience helper - widgets that implement the protocol themselves do not need to use it.
 * {@link buildHtmlWidgetMarkdown} calls this internally, so most developers won't call it directly.
 *
 * This sets up:
 * - The ui/initialize handshake (required for rendering)
 * - Size reporting via ui/notifications/size-changed
 * - Optional notification hooks (opt-in via `notifications` option)
 *
 * If the HTML already contains the protocol (detected by the presence of `ui/initialize`), it is returned unchanged.
 *
 * @param html - The raw HTML content for the widget.
 * @param options - Optional configuration for the protocol setup.
 * @returns The HTML with the protocol script injected.
 */
export function injectWidgetProtocol(
  html: string,
  options?: IInjectWidgetProtocolOptions
): string {
  if (html.includes('ui/initialize')) {
    return html;
  }

  const name = options?.name ?? 'widget';
  const version = options?.version ?? '1.0.0';
  const caps = options?.appCapabilities;
  const capsJson = caps?.availableDisplayModes
    ? `{availableDisplayModes:${JSON.stringify(caps.availableDisplayModes)}}`
    : '{}';

  // Build inline JS that dispatches incoming JSON-RPC notifications to
  // the corresponding window.onX callback defined by the developer.
  const notifications = options?.notifications ?? [];
  const hookLines = notifications
    .filter((n) => n in NOTIFICATION_CALLBACKS)
    .map((n) => {
      const method = `ui/notifications/${n}`;
      const cb = NOTIFICATION_CALLBACKS[n];
      return `if(d.method==='${method}'&&window.${cb}){window.${cb}(d.params);}`;
    }).join('');

  // Assemble the protocol script (minified for payload size):
  // - Generate a unique request ID for the init handshake
  // - Define notifySize to report body height to the host
  // - Listen for messages: on init response, send initialized + size;
  //   on known notifications, dispatch to window.onX callbacks
  // - Send ui/initialize request with app info and capabilities
  // - Report size on DOMContentLoaded
  const script = '<script>(function(){'
    + 'var id=\'init-\'+Math.random().toString(36).slice(2);'
    + 'function notifySize(){window.parent.postMessage({jsonrpc:\'2.0\',method:\'ui/notifications/size-changed\',params:{height:document.body.scrollHeight}},\'*\');}'
    + 'window.addEventListener(\'message\',function(e){var d=e.data;if(!d||d.jsonrpc!==\'2.0\')return;'
    + 'if(d.id===id&&d.result){window.parent.postMessage({jsonrpc:\'2.0\',method:\'ui/notifications/initialized\'},\'*\');setTimeout(notifySize,100);}'
    + hookLines
    + '});'
    + `window.parent.postMessage({jsonrpc:'2.0',id:id,method:'ui/initialize',params:{protocolVersion:'${MCP_PROTOCOL_VERSION}',appInfo:{name:'${name}',version:'${version}'},appCapabilities:${capsJson}}},'*');`
    + 'document.addEventListener(\'DOMContentLoaded\',notifySize);'
    + '})()</script>';

  // Inject before </body> if present, otherwise append
  if (html.includes('</body>')) {
    return html.replace('</body>', script + '</body>');
  }

  return html + script;
}

/**
 * Default security policy applied when none is specified.
 * Follows the MCP Apps spec recommendation of restrictive defaults:
 * no external network access, self + data URIs for resources only.
 */
const DEFAULT_SECURITY_POLICY: Required<IHtmlWidgetPayload>['securityPolicy'] = {
  connectDomains: [],
  resourceDomains: ['\'self\'', 'data:'],
  frameDomains: [],
  baseUriDomains: [],
};

/**
 * Wraps an HTML widget payload in the ` ```html-widget ` markdown code fence
 * format required by Teams to render the widget in a message.
 *
 * @param payload - The widget payload to serialize.
 * @param options - Optional text to include before/after the widget block.
 * @returns The markdown string containing the widget code block.
 */
export function buildHtmlWidgetMarkdown(
  payload: IHtmlWidgetPayload,
  options?: IHtmlWidgetMarkdownOptions
): string {
  validateHtmlWidgetPayload(payload);

  const injectedPayload = {
    ...payload,
    html: injectWidgetProtocol(payload.html, { name: payload.name }),
    securityPolicy: payload.securityPolicy ?? DEFAULT_SECURITY_POLICY,
  };
  const json = JSON.stringify(injectedPayload);
  const parts: string[] = [];

  if (options?.before) {
    parts.push(options.before, '');
  }

  parts.push('```html-widget', json, '```');

  if (options?.after) {
    parts.push('', options.after);
  }

  return parts.join('\n');
}

/**
 * Builds a message activity containing an HTML widget, ready to be sent.
 *
 * @param payload - The widget payload to include in the message.
 * @param options - Optional text to include before/after the widget block.
 * @returns An activity object with textFormat set to 'extendedmarkdown'.
 */
export function buildHtmlWidgetMessage(
  payload: IHtmlWidgetPayload,
  options?: IHtmlWidgetMarkdownOptions
): { type: 'message'; text: string; textFormat: 'extendedmarkdown' } {
  return {
    type: 'message',
    text: buildHtmlWidgetMarkdown(payload, options),
    textFormat: 'extendedmarkdown',
  };
}
