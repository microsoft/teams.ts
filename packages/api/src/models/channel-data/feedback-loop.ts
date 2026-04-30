/**
 * Configuration for a feedback loop on a message.
 */
export type FeedbackLoop = {
  /**
   * The type of feedback loop.
   * Use `custom` to trigger a `message/fetchTask` invoke so the bot can return its own task module dialog.
   * Use `default` for the standard Teams thumbs up/down UI.
   */
  type: 'default' | 'custom';
};