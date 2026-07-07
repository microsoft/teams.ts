/**
 * The security policy for an HTML widget, controlling allowed origins
 * for network requests, static resources, nested iframes, and base URIs.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IHtmlWidgetSecurityPolicy {
  /**
   * Allowed origins for network requests.
   */
  connectDomains?: string[];

  /**
   * Allowed origins for static resources.
   */
  resourceDomains?: string[];

  /**
   * Allowed origins for nested iframes.
   */
  frameDomains?: string[];

  /**
   * Allowed base URIs for the document.
   */
  baseUriDomains?: string[];
}

/**
 * Permissions that the widget may request from the host.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IHtmlWidgetPermissions {
  /**
   * Request camera access.
   */
  camera?: Record<string, never>;

  /**
   * Request microphone access.
   */
  microphone?: Record<string, never>;

  /**
   * Request geolocation access.
   */
  geolocation?: Record<string, never>;

  /**
   * Request clipboard write access.
   */
  clipboardWrite?: Record<string, never>;
}

/**
 * The JSON payload for an HTML widget, sent inside a ```html-widget code block
 * within a Markdown message.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IHtmlWidgetPayload {
  /**
   * The widget type identifier. Currently only "widget/mcp-ui" is supported.
   */
  type: 'widget/mcp-ui';

  /**
   * The display name of the MCP app.
   */
  name: string;

  /**
   * A description of the MCP app.
   */
  description?: string;

  /**
   * The HTML content that makes up the widget.
   */
  html: string;

  /**
   * The domain associated with the widget, applied to sandbox metadata.
   * Must be a valid domain URL (e.g. 'https://example.com'). The domain
   * does not need to resolve or serve content, but must be non-empty.
   * This value is available to the rendering MCP App as informational context.
   *
   * Note: This is informational metadata, not a verified identity claim.
   * The platform does not authenticate this value.
   */
  domain: string;

  /**
   * Optional security policy controlling allowed origins.
   */
  securityPolicy?: IHtmlWidgetSecurityPolicy;

  /**
   * Optional data that was passed as input to the tool that produced this widget.
   */
  toolInput?: unknown;

  /**
   * Optional data that the tool produced alongside this widget.
   */
  toolOutput?: unknown;

  /**
   * Optional permissions the widget requests from the host.
   */
  permissions?: IHtmlWidgetPermissions;
}
