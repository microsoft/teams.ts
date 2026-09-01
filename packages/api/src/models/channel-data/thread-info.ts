/**
 * Identifies the root of the thread containing an inbound message.
 */
export type ThreadInfo = {
  /**
   * Activity ID of the thread's root message.
   */
  readonly id: string;
};
