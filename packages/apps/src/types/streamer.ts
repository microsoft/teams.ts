import { IMessageActivity, ITypingActivity, SentActivity } from '@microsoft/spark.api';
import { IEventEmitter } from '@microsoft/spark.common';

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
   * emit an activity chunk
   * @param activity the activity to send
   */
  emit(activity: Partial<IMessageActivity | ITypingActivity> | string): void;

  /**
   * close the stream
   */
  close(): void | Promise<void>;
}
