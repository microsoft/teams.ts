/**
 * A request from a widget to call a tool on the bot.
 * Sent as the value of an `htmlwidget/calltool` invoke activity.
 */
export interface ICallToolRequest {
  /**
   * The name of the tool to call.
   */
  name: string;

  /**
   * The arguments to pass to the tool.
   */
  arguments?: unknown;
}
