import { ActivityParams, AgenticIdentity, ConversationReference, DeprecatedInputActivity, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Options for low-level activity sender operations.
 */
export type ActivitySenderOptions = {
  /**
   * Agentic identity scope to use when acquiring tokens for this send.
   */
  readonly agenticIdentity?: AgenticIdentity;

  /**
   * The id of the message at the root of a reply chain (thread).
   * When set on a new activity, it is sent as a reply in that thread, within the chat or channel the activity is sent to, identified by `channelData.chat.id` or `channelData.channel.id`.
   * Ignored when the activity updates an existing message.
   *
   * @experimental This API is in preview and may change in the future. Diagnostic: ExperimentalTeamsThreading
   */
  readonly replyChainId?: string;
};

/**
 * Options for creating a stream.
 *
 * @experimental This API is in preview and may change in the future. Diagnostic: ExperimentalTeamsThreading
 */
export type StreamOptions = {
  /**
   * Places the stream in a reply chain (thread).
   * `chatOrChannelId` is the chat or channel id (`channelData.chat.id` or `channelData.channel.id`) and `replyChainId` is the id of the message at the root of the reply chain (`channelData.replyChain.id`).
   * `inChannel` marks the chat or channel id as a channel id.
   */
  readonly replyChain?: {
    readonly chatOrChannelId: string;
    readonly replyChainId: string;
    readonly inChannel?: boolean;
  };
};

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  send(activity: ActivityParams | DeprecatedInputActivity, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference, options?: StreamOptions): IStreamer;
}
