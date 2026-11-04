/**
 * Client-supplied context that the Teams client adds to `arguments.__msteams__` on every `htmlwidget/calltool` request.
 * The client overwrites any value the bot supplied, so treat it as informational.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export interface IHtmlWidgetCallToolContext {
  /**
   * The MCP URL of the widget that made the call, when the widget payload set one.
   */
  mcpUrl?: string;

  /**
   * The correlation vector of the widget that made the call, when the widget payload set one.
   */
  correlationId?: string;
}

/**
 * A request from a widget to call a tool on the bot.
 * Sent as the value of an `htmlwidget/calltool` invoke activity.
 *
 * The Teams client adds `arguments.__msteams__` (see {@link IHtmlWidgetCallToolContext}) to every request and overwrites any bot-supplied value.
 * The SDK passes `arguments` to handlers untouched.
 * Handlers should ignore `__msteams__`, validate `arguments` as untrusted input, never throw, and not authorize from `activity.from`.
 */
export interface ICallToolRequest {
  /**
   * The name of the tool to call.
   */
  name: string;

  /**
   * The arguments to pass to the tool.
   * Includes the client-added `__msteams__` entry.
   */
  arguments?: unknown;
}
