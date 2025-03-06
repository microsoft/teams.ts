import { TaskModuleResponseBase } from './task-module-response-base';

/**
 *
 * Tab response to 'task/submit'.
 *
 * @extends TaskModuleResponseBase
 */
export type TaskModuleCardResponse = TaskModuleResponseBase & {
  /**
   * @member {string} [value] JSON for Adaptive cards to appear in the tab.
   */
  value?: string;
};
