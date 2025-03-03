import { MessageSendActivity, TypingActivity } from '@microsoft/spark.api';

/**
 * component that can send streamed chunks of an activity
 */
export interface Streamer {
  /**
   * emit an activity chunk
   * @param activity the activity to send
   */
  emit(activity: Partial<MessageSendActivity | TypingActivity> | string): void;

  /**
   * close the stream
   */
  close(): void | Promise<void>;
}
