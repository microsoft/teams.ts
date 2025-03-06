import { IMessageActivity, ITypingActivity } from '@microsoft/spark.api';

/**
 * component that can send streamed chunks of an activity
 */
export interface Streamer {
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
