/**
 * Text content item in an MCP call tool result.
 */
export interface IMcpUiTextContent {
  type: 'text';
  text: string;
}

/**
 * Image content item in an MCP call tool result.
 */
export interface IMcpUiImageContent {
  type: 'image';
  /** Base64-encoded image data. */
  data: string;
  /** MIME type of the image (e.g. "image/png"). */
  mimeType: string;
}

/**
 * Audio content item in an MCP call tool result.
 */
export interface IMcpUiAudioContent {
  type: 'audio';
  /** Base64-encoded audio data. */
  data: string;
  /** MIME type of the audio (e.g. "audio/wav"). */
  mimeType: string;
}

/**
 * Embedded resource content item in an MCP call tool result.
 */
export interface IMcpUiResourceContent {
  type: 'resource';
  resource: {
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: string;
  };
}

/**
 * A content item in an MCP UI call tool result.
 * Teams currently only renders 'text' content; other types are defined
 * by the MCP spec for forward compatibility.
 */
export type IMcpUiCallToolResultContent =
  | IMcpUiTextContent
  | IMcpUiImageContent
  | IMcpUiAudioContent
  | IMcpUiResourceContent;

/**
 * The result of a widget's `tools/call` request, returned by the bot
 * in response to an `htmlwidget/calltool` invoke activity.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
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
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
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
