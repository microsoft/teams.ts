import { TaskModuleResponseBase } from './task-module-response-base';

/**
 *
 * An interface representing TaskModuleMessageResponse.
 * Task Module response with message action.
 *
 * @extends TaskModuleResponseBase
 */
export type TaskModuleMessageResponse = TaskModuleResponseBase & {
  /**
   * @member {string} [value] Teams will display the value of value in a popup
   * message box.
   */
  value?: string;
};
