import {
  IHtmlWidgetPayload,
  IHtmlWidgetSecurityPolicy,
  IMcpUiUpdateModelContextRequest,
} from '@microsoft/teams.api';

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

  const domain = payload.domain.trim();
  let domainUrl: URL | undefined;
  try {
    domainUrl = new URL(domain);
  } catch {
    domainUrl = undefined;
  }
  if (!domainUrl || domainUrl.protocol !== 'https:' || !domainUrl.hostname) {
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
 * The widget HTML is sent as authored.
 * The widget owns the `ui/initialize` handshake and the `ui/notifications/size-changed` reporting.
 * Without a size reporter, Teams renders the widget at about 150px tall.
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

  const json = JSON.stringify({
    ...resolved,
    securityPolicy: resolved.securityPolicy ?? DEFAULT_SECURITY_POLICY,
  });
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
 * The widget HTML is sent as authored, so the widget owns the `ui/initialize` handshake and the `ui/notifications/size-changed` reporting.
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
    if (origin === cleaned) return true;
    // If the policy entry pins a scheme (e.g. `https://example.com`), the
    // origin must use that same scheme; otherwise fall back to host-only match.
    const schemeMatch = /^(https?):\/\//.exec(cleaned);
    if (schemeMatch && !origin.startsWith(`${schemeMatch[1]}://`)) return false;
    const host = cleaned.replace(/^https?:\/\//, '');
    return origin.endsWith(`.${host}`);
  });
}

/**
 * Validates that external references in widget HTML are covered by the
 * declared security policy. Returns an array of warnings for any
 * references to origins not present in the appropriate policy field.
 *
 * This is a static analysis tool - it cannot catch dynamically constructed
 * URLs (e.g. `fetch('https://' + domain)`). A `securitypolicyviolation` listener in the widget
 * reports those at runtime.
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

  // baseUriDomains: <base href>
  for (const tagStr of findTags('base')) {
    const attrMatch = tagStr.match(/href=["']([^"']+)["']/i);
    if (attrMatch) {
      const origin = extractOrigin(attrMatch[1]);
      if (origin && !isOriginAllowed(origin, policy.baseUriDomains ?? [])) {
        warnings.push({
          url: attrMatch[1],
          source: '<base href>',
          policyField: 'baseUriDomains',
          message: `<base href> references "${attrMatch[1]}" but origin "${origin}" is not in baseUriDomains.`,
        });
      }
    }
  }

  return warnings;
}

/**
 * Attempts to extract an MCP UI update-model-context request from a message
 * activity's `value`. A widget can request that content be added to the model
 * context by reusing the messageBack mechanism (like `Action.Submit` for
 * adaptive cards). Such a request arrives as a normal message activity whose
 * `value` carries the {@link IMcpUiUpdateModelContextRequest} payload. This is
 * fire-and-forget: the bot does not respond.
 *
 * This helper is tolerant of two wire shapes:
 *   1. The raw request object (`{ method: 'ui/update-model-context', params }`).
 *   2. An envelope of the form `{ type: 'widgetModelContext', data: <request> }`.
 *
 * @param activity - A message activity (or any object with a `value` field).
 * @returns The parsed request, or `undefined` if `value` is not a valid
 *   update-model-context request.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export function tryGetWidgetModelContext(
  activity: { value?: any } | undefined | null
): IMcpUiUpdateModelContextRequest | undefined {
  const value = activity?.value;
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  // Unwrap the `{ type: 'widgetModelContext', data }` envelope if present.
  const candidate =
    value.type === 'widgetModelContext' && value.data && typeof value.data === 'object' ? value.data : value;

  if (candidate.method !== 'ui/update-model-context') {
    return undefined;
  }

  if (!candidate.params || typeof candidate.params !== 'object') {
    return undefined;
  }

  return candidate as IMcpUiUpdateModelContextRequest;
}
