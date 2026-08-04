import { IMcpUiCallToolResultContent } from './call-tool-result';

/**
 * A content block in an MCP UI update-model-context request.
 * This reuses the same content union as {@link IMcpUiCallToolResult},
 * as defined by the MCP Apps (ext-apps) specification.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export type IMcpUiContentBlock = IMcpUiCallToolResultContent;

/**
 * The parameters of an MCP UI `ui/update-model-context` request.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IMcpUiUpdateModelContextParams {
  /**
   * An array of content blocks the widget wants to add to the model context.
   */
  content?: IMcpUiContentBlock[];

  /**
   * Structured data the widget wants to add to the model context.
   */
  structuredContent?: Record<string, unknown>;
}

/**
 * A widget's request to update the model context, delivered on the
 * `value` of a message activity (reusing the messageBack mechanism,
 * fire-and-forget). Defined by the MCP Apps (ext-apps) specification.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IMcpUiUpdateModelContextRequest {
  /**
   * The MCP method discriminator.
   */
  method: 'ui/update-model-context';

  /**
   * The request parameters.
   */
  params: IMcpUiUpdateModelContextParams;
}
