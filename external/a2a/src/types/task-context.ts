import * as schema from '../schema';

export type TaskContext = {
  /**
   * The current state of the task when the handler is invoked or resumed.
   * Note: This is a snapshot. For the absolute latest state during async operations,
   * the handler might need to reload the task via the store.
   */
  task: schema.Task;

  /**
   * The specific user message that triggered this handler invocation or resumption.
   */
  message: schema.Message;

  /**
   * Function to check if cancellation has been requested for this task.
   * Handlers should ideally check this periodically during long-running operations.
   * @returns {boolean} True if cancellation has been requested, false otherwise.
   */
  cancelled: boolean;

  /**
   * The message history associated with the task up to the point the handler is invoked.
   * Optional, as history might not always be available or relevant.
   */
  history?: schema.Message[];
};
