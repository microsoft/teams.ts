import { IMessageActivity, ITypingActivity, SentActivity } from '@microsoft/teams.api';
import { IEventEmitter } from '@microsoft/teams.common';

/**
 * Raised when a stream operation is attempted after the stream has been cancelled.
 */
export class StreamCancelledError extends Error {
  constructor(message?: string) {
    super(message ?? 'Stream has been cancelled.');
    this.name = 'StreamCancelledError';
  }
}

/**
 * the minimum events a streamer
 * should support
 */
export interface IStreamerEvents {
  /**
   * emitted for each chunk sent
   */
  readonly chunk: SentActivity;

  /**
   * emitted once on stream close
   */
  readonly close: SentActivity;
}

/**
 * component that can send streamed chunks of an activity
 */
export interface IStreamer {
  readonly events: Omit<IEventEmitter<IStreamerEvents>, 'emit'>;

  /**
   * whether the stream has been canceled.
   * For example when the user pressed the Stop button or the 2-minute timeout has exceeded.
   */
  readonly canceled: boolean;

  /**
   * emit an activity chunk
   * @param activity the activity to send
   */
  emit(activity: Partial<IMessageActivity | ITypingActivity> | string): void;

  /**
   * send status updates before emitting (ex. "Thinking...")
   * @param text the status text to send
   */
  update(text: string): void;

  /**
   * close the stream
   */
  close(): SentActivity | undefined | Promise<SentActivity | undefined>;
}
