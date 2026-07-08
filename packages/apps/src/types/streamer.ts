import { IMessageActivity, ITypingActivity, SentActivity } from '@microsoft/teams.api';
import { IEventEmitter } from '@microsoft/teams.common';

/**
 * Raised when Teams cancels a stream (403) or when a stream operation is attempted after cancellation.
 */
export class StreamCancelledError extends Error {
  constructor(message?: string) {
    super(message ?? 'stream canceled');
    this.name = 'StreamCancelledError';
  }
}

/**
 * Base class for terminal streaming errors (HTTP 403) that should not be retried.
 */
export class TerminalStreamError extends Error {
  constructor(message?: string) {
    super(message ?? 'terminal stream error');
    this.name = 'TerminalStreamError';
  }
}

/**
 * Raised when the bot failed to complete streaming within the two-minute limit.
 */
export class StreamTimedOutError extends TerminalStreamError {
  constructor(message?: string) {
    super(message ?? 'stream timed out');
    this.name = 'StreamTimedOutError';
  }
}

/**
 * Raised when streaming is not allowed for this user or bot.
 */
export class StreamNotAllowedError extends TerminalStreamError {
  constructor(message?: string) {
    super(message ?? 'stream not allowed');
    this.name = 'StreamNotAllowedError';
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
   * For example when the user pressed the Stop button.
   */
  readonly canceled: boolean;

  /**
   * whether the current streamed message has been finalized.
   *
   * Closing is idempotent until the next emit or update. Emitting or
   * updating after close starts a new streamed message using the same
   * stream instance.
   */
  readonly closed: boolean;

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
   * Discard accumulated streamed text and any pending text deltas, so the
   * final message sent by `close()` doesn't include them. Useful when a
   * mid-turn decision (e.g. a tool call producing a card) means the
   * buffered text should not appear in the final activity. Typing chunks
   * already shipped to Teams are not undone, but the final message updates
   * the same activity to reflect the cleared state.
   */
  clearText(): void;

  /**
   * Finalize the current streamed message.
   *
   * Closing is idempotent until the next emit or update. Emitting or
   * updating after close starts a new streamed message using the same
   * stream instance.
   */
  close(): SentActivity | undefined | Promise<SentActivity | undefined>;
}
