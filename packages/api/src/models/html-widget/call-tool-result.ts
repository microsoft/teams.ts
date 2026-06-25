/**
 * A content item in an MCP UI call tool result.
 */
export interface IMcpUiCallToolResultContent {
  /**
   * The type of content (e.g. "text").
   */
  type: string;

  /**
   * The text content.
   */
  text: string;
}

/**
 * The result of a widget's `tools/call` request, returned by the bot
 * in response to an `htmlwidget/calltool` invoke activity.
 */
export interface IMcpUiCallToolResult {
  /**
   * An array of content items to return to the widget.
   */
  content?: IMcpUiCallToolResultContent[];

  /**
   * Structured data that the widget can render from.
   */
  structuredContent?: unknown;

  /**
   * Whether the tool call resulted in an error.
   */
  isError?: boolean;
}

/**
 * The wire-format response body for an `htmlwidget/calltool` invoke.
 * Teams expects this shape (with `responseType` discriminator) rather than
 * a bare {@link IMcpUiCallToolResult}.
 */
export interface IHtmlWidgetCallToolResponse {
  /**
   * Discriminator that tells Teams how to interpret the response.
   */
  responseType: 'htmlwidget/calltoolresult';

  /**
   * The tool call result payload.
   */
  callToolResult: IMcpUiCallToolResult;
}
