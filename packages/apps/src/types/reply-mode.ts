/**
 * How the activity context's `reply` places and quotes its response in a chat or channel.
 *
 * - `combined`: in a chat, a reply to a top-level message goes into a thread under that message, and a reply inside a thread stays in that thread. The inbound message is quoted.
 * - `quote`: the reply stays at the level of the inbound message (top level or the same thread) and quotes it.
 * - `thread`: like `combined`, without the quote when the reply lands in a thread.
 *
 * In a channel every reply already goes into the thread of the inbound message, so the mode only decides the quote: `thread` drops it, `combined` and `quote` keep it.
 * The mode applies to message activities only.
 * It does not affect `app.reply`, `send`, `quote`, streams or plans.
 * A reply that does not land in a thread keeps the quote in every mode, including `thread`.
 * In a chat that is when the inbound activity carries no `channelData.chat.id` and `channelData.replyChain.id` (e.g. in a meeting), or the message it is about cannot start a thread.
 * The reply quotes the inbound activity only when that activity can be quoted, so a reply to a card action or another invoke is sent without a quote.
 *
 * @experimental This API is in preview and may change in the future. Diagnostic: ExperimentalTeamsThreading
 */
export type ReplyMode = 'combined' | 'quote' | 'thread';

/**
 * Options for a single `reply` call.
 *
 * @experimental This API is in preview and may change in the future. Diagnostic: ExperimentalTeamsThreading
 */
export type ReplyOptions = {
  /**
   * The reply mode for this call.
   * Overrides the app's `activity.replyMode` setting.
   * When omitted, the app's setting is used, and when that is also omitted, `combined`.
   */
  readonly replyMode?: ReplyMode;
};
