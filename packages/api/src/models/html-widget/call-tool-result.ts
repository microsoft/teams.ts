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
