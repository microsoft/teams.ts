import { TaskModuleResponseBase } from './task-module-response-base';

/**
 * @interface
 * Tab response to 'task/submit'.
 *
 * @extends TaskModuleResponseBase
 */
export interface TaskModuleCardResponse extends TaskModuleResponseBase {
  /**
   * @member {string} [value] JSON for Adaptive cards to appear in the tab.
   */
  value?: string;
}
