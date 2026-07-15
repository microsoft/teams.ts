import { IHtmlWidgetPayload, IHtmlWidgetSecurityPolicy } from '@microsoft/teams.api';

/**
 * Input type for the widget builder functions. Identical to {@link IHtmlWidgetPayload}
 * but `type` is optional and defaults to `'widget/mcp-ui'`.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export type IHtmlWidgetPayloadInput = Omit<IHtmlWidgetPayload, 'type'> & {
  type?: IHtmlWidgetPayload['type'];
};

/**
 * The MCP Apps protocol version used for the widget init handshake.
 */
const MCP_PROTOCOL_VERSION = '2026-01-26';

/**
 * Validates an HTML widget payload, throwing if required fields are
 * missing or empty. This catches issues that would otherwise result
 * in a silent client-side render failure ("Couldn't load widget").
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
function validateHtmlWidgetPayload(payload: IHtmlWidgetPayload): void {
  if (!payload.name.trim()) {
    throw new Error('HTML widget payload requires a non-empty "name" field.');
  }

  if (!payload.html.trim()) {
    throw new Error('HTML widget payload requires a non-empty "html" field.');
  }

  if (!payload.domain.trim() || !payload.domain.startsWith('https://')) {
    throw new Error('HTML widget payload requires "domain" to be a valid URL starting with "https://".');
  }
}

/**
 * Options for building an HTML widget markdown string.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
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

  /**
   * Options forwarded to {@link injectWidgetProtocol} when the protocol
   * is auto-injected into the widget HTML. Use this to configure
   * notifications, display modes, or enable CSP violation debugging
   * without calling `injectWidgetProtocol` manually.
   *
   * The `name` field is always set from the payload's `name` and cannot
   * be overridden here.
   */
  protocolOptions?: Omit<IInjectWidgetProtocolOptions, 'name'>;
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
 * Options for injecting the MCP Apps protocol into widget HTML.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
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

  /**
   * When true, injects a `securitypolicyviolation` event listener that logs CSP violations to the console. 
   * This catches dynamically constructed URLs that static analysis ({@link validateSecurityPolicy}) cannot detect.
   *
   * Should only be enabled during development.
   *
   * @default false
   */
  debugCspViolations?: boolean;
}

// ---------------------------------------------------------------------------
// Protocol injection
// ---------------------------------------------------------------------------

/**
 * Escapes a string for safe embedding in a single-quoted JS string literal
 * inside an inline `<script>` tag. Handles:
 * - Backslash and single-quote (JS string breakout)
 * - `</` sequence (HTML `</script>` breakout)
 * - Newlines (JS string literal breakout)
 */
function escapeForInlineScript(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, '\\\'')
    .replace(/<\//g, '<\\/')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

/**
 * Explicit mapping of notification names to their window callback names.
 * Only notifications in this map will have hooks injected.
 *
 * Supported in the Teams app bridge: tool-result, tool-input
 * Not supported in the Teams app bridge: tool-input-partial, tool-cancelled
 * Not yet available in Teams: host-context-changed, resource-teardown
 */
const NOTIFICATION_CALLBACKS: Record<string, string> = {
  // Supported in the Teams app bridge
  'tool-result': 'onToolResult',
  'tool-input': 'onToolInput',
  // MCP Apps spec (SEP-1865) - not supported in the Teams app bridge
  'tool-input-partial': 'onToolInputPartial',
  'tool-cancelled': 'onToolCancelled',
  // MCP Apps spec (SEP-1865) - not yet available in Teams
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
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export function injectWidgetProtocol(
  html: string,
  options?: IInjectWidgetProtocolOptions
): string {
  if (html.includes('ui/initialize')) {
    return html;
  }

  const name = escapeForInlineScript(options?.name ?? 'widget');
  const version = escapeForInlineScript(options?.version ?? '1.0.0');
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

  // CSP violation listener (dev-only, opt-in)
  const cspDebug = options?.debugCspViolations
    ? 'document.addEventListener(\'securitypolicyviolation\',function(e){'
      + 'console.warn(\'[widget CSP violation]\',{'
      + 'blockedURI:e.blockedURI,'
      + 'violatedDirective:e.violatedDirective,'
      + 'originalPolicy:e.originalPolicy'
      + '});});'
    : '';

  // Assemble the protocol script (minified for payload size):
  // - (opt-in) Listen for CSP violations and log them
  // - Generate a unique request ID for the init handshake
  // - Define notifySize to report body height to the host
  // - Listen for messages: on init response, send initialized + size;
  //   on known notifications, dispatch to window.onX callbacks
  // - Send ui/initialize request with app info and capabilities
  // - Report size on DOMContentLoaded
  const script = '<script>(function(){'
    + cspDebug
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
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export function buildHtmlWidgetMarkdown(
  payload: IHtmlWidgetPayloadInput,
  options?: IHtmlWidgetMarkdownOptions
): string {
  const resolved: IHtmlWidgetPayload = { type: 'widget/mcp-ui', ...payload };
  validateHtmlWidgetPayload(resolved);

  const injectedPayload = {
    ...resolved,
    html: injectWidgetProtocol(resolved.html, { ...options?.protocolOptions, name: resolved.name }),
    securityPolicy: resolved.securityPolicy ?? DEFAULT_SECURITY_POLICY,
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
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export function buildHtmlWidgetMessage(
  payload: IHtmlWidgetPayloadInput,
  options?: IHtmlWidgetMarkdownOptions
): { type: 'message'; text: string; textFormat: 'extendedmarkdown' } {
  return {
    type: 'message',
    text: buildHtmlWidgetMarkdown(payload, options),
    textFormat: 'extendedmarkdown',
  };
}

/**
 * A warning produced by {@link validateSecurityPolicy} when the widget HTML
 * references an external origin that is not present in the declared security
 * policy.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface ISecurityPolicyWarning {
  /** The URL or origin found in the HTML. */
  url: string;

  /** The HTML element or API where the reference was found (e.g. `<script>`, `fetch`). */
  source: string;

  /** The securityPolicy field that should include this origin. */
  policyField: keyof IHtmlWidgetSecurityPolicy;

  /** A human-readable description of the issue. */
  message: string;
}

/**
 * Extracts the origin (scheme + host) from a URL string.
 * Returns null if the URL is relative, a data URI, or unparseable.
 */
function extractOrigin(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith('data:') || trimmed.startsWith('#') || trimmed.startsWith('blob:')) {
    return null;
  }

  // Relative URLs are fine (they resolve to the iframe origin)
  if (!trimmed.includes('://') && !trimmed.startsWith('//')) {
    return null;
  }

  try {
    const parsed = new URL(trimmed.startsWith('//') ? `https:${trimmed}` : trimmed);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return null;
  }
}

/**
 * Checks whether an origin is covered by a list of allowed domains/origins.
 * Handles special CSP values like `'self'` and `*`.
 */
function isOriginAllowed(origin: string, allowedDomains: string[]): boolean {
  if (allowedDomains.includes('*')) return true;
  return allowedDomains.some((domain) => {
    const cleaned = domain.replace(/^['"]|['"]$/g, '');
    if (cleaned === '*') return true;
    return origin === cleaned || origin.endsWith(`.${cleaned.replace(/^https?:\/\//, '')}`);
  });
}

/**
 * Validates that external references in widget HTML are covered by the
 * declared security policy. Returns an array of warnings for any
 * references to origins not present in the appropriate policy field.
 *
 * This is a static analysis tool - it cannot catch dynamically constructed
 * URLs (e.g. `fetch('https://' + domain)`). Use the `debugCspViolations`
 * option on {@link injectWidgetProtocol} for runtime detection.
 *
 * Note: The CSP keyword `'self'` cannot be validated statically because it
 * resolves to the iframe's parent origin at runtime. References that would
 * be allowed by `'self'` may still produce warnings.
 *
 * @param html - The raw HTML content of the widget.
 * @param policy - The security policy to validate against.
 * @returns An array of warnings. Empty array means no issues found.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export function validateSecurityPolicy(
  html: string,
  policy: IHtmlWidgetSecurityPolicy
): ISecurityPolicyWarning[] {
  const warnings: ISecurityPolicyWarning[] = [];

  // Helper: find all opening tags by name using indexOf (O(n), no regex backtracking).
  // Returns the substring of each tag (from '<tagName' to the next '>').
  function findTags(tagName: string): string[] {
    const tags: string[] = [];
    const needle = '<' + tagName;
    const lower = html.toLowerCase();
    let pos = 0;
    while (pos < lower.length) {
      const start = lower.indexOf(needle, pos);
      if (start === -1) break;
      // Ensure tag name is followed by whitespace or '>' (not a prefix of another tag)
      const afterTag = start + needle.length;
      if (afterTag < lower.length && lower[afterTag] !== ' ' && lower[afterTag] !== '\t'
          && lower[afterTag] !== '\n' && lower[afterTag] !== '\r' && lower[afterTag] !== '>'
          && lower[afterTag] !== '/') {
        pos = afterTag;
        continue;
      }
      const end = html.indexOf('>', start);
      if (end === -1) break;
      tags.push(html.substring(start, end + 1));
      pos = end + 1;
    }
    return tags;
  }

  // resourceDomains: <script src>, <link href>, <img src>, <source src>,
  // <audio src>, <video src>, CSS url(), @import
  const tagAttrChecks: Array<{ tag: string; attrRegex: RegExp; source: string }> = [
    { tag: 'script', attrRegex: /src=["']([^"']+)["']/i, source: '<script src>' },
    { tag: 'link', attrRegex: /href=["']([^"']+)["']/i, source: '<link href>' },
    { tag: 'img', attrRegex: /src=["']([^"']+)["']/i, source: '<img src>' },
    { tag: 'source', attrRegex: /src=["']([^"']+)["']/i, source: '<source src>' },
    { tag: 'audio', attrRegex: /src=["']([^"']+)["']/i, source: '<audio src>' },
    { tag: 'video', attrRegex: /src=["']([^"']+)["']/i, source: '<video src>' },
  ];

  for (const { tag, attrRegex, source } of tagAttrChecks) {
    for (const tagStr of findTags(tag)) {
      const attrMatch = tagStr.match(attrRegex);
      if (attrMatch) {
        const origin = extractOrigin(attrMatch[1]);
        if (origin && !isOriginAllowed(origin, policy.resourceDomains ?? [])) {
          warnings.push({
            url: attrMatch[1],
            source,
            policyField: 'resourceDomains',
            message: `${source} references "${attrMatch[1]}" but origin "${origin}" is not in resourceDomains.`,
          });
        }
      }
    }
  }

  // CSS url() and @import (simple patterns, no tag-level backtracking risk)
  const cssPatterns: Array<{ regex: RegExp; source: string }> = [
    { regex: /url\(\s*["']([^"')]+)["']\s*\)/gi, source: 'CSS url()' },
    { regex: /@import\s+["']([^"']+)["']/gi, source: 'CSS @import' },
  ];

  for (const { regex, source } of cssPatterns) {
    let match;
    while ((match = regex.exec(html)) !== null) {
      const origin = extractOrigin(match[1]);
      if (origin && !isOriginAllowed(origin, policy.resourceDomains ?? [])) {
        warnings.push({
          url: match[1],
          source,
          policyField: 'resourceDomains',
          message: `${source} references "${match[1]}" but origin "${origin}" is not in resourceDomains.`,
        });
      }
    }
  }

  // connectDomains: fetch(), XMLHttpRequest.open(), new WebSocket(), new EventSource()
  const connectPatterns: Array<{ regex: RegExp; source: string }> = [
    { regex: /fetch\(\s*["']([^"']+)["']/gi, source: 'fetch()' },
    { regex: /\.open\(\s*["'][A-Za-z]+["']\s*,\s*["']([^"']+)["']/gi, source: 'XMLHttpRequest.open()' },
    { regex: /new\s+WebSocket\(\s*["']([^"']+)["']/gi, source: 'new WebSocket()' },
    { regex: /new\s+EventSource\(\s*["']([^"']+)["']/gi, source: 'new EventSource()' },
  ];

  for (const { regex, source } of connectPatterns) {
    let match;
    while ((match = regex.exec(html)) !== null) {
      const origin = extractOrigin(match[1]);
      if (origin && !isOriginAllowed(origin, policy.connectDomains ?? [])) {
        warnings.push({
          url: match[1],
          source,
          policyField: 'connectDomains',
          message: `${source} references "${match[1]}" but origin "${origin}" is not in connectDomains.`,
        });
      }
    }
  }

  // frameDomains: <iframe src>
  for (const tagStr of findTags('iframe')) {
    const attrMatch = tagStr.match(/src=["']([^"']+)["']/i);
    if (attrMatch) {
      const origin = extractOrigin(attrMatch[1]);
      if (origin && !isOriginAllowed(origin, policy.frameDomains ?? [])) {
        warnings.push({
          url: attrMatch[1],
          source: '<iframe src>',
          policyField: 'frameDomains',
          message: `<iframe src> references "${attrMatch[1]}" but origin "${origin}" is not in frameDomains.`,
        });
      }
    }
  }

  // connectDomains: <form action> (form submissions can exfiltrate data)
  for (const tagStr of findTags('form')) {
    const attrMatch = tagStr.match(/action=["']([^"']+)["']/i);
    if (attrMatch) {
      const origin = extractOrigin(attrMatch[1]);
      if (origin && !isOriginAllowed(origin, policy.connectDomains ?? [])) {
        warnings.push({
          url: attrMatch[1],
          source: '<form action>',
          policyField: 'connectDomains',
          message: `<form action> references "${attrMatch[1]}" but origin "${origin}" is not in connectDomains.`,
        });
      }
    }
  }

  return warnings;
}
