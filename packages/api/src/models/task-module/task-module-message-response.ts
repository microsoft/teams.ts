import { TaskModuleResponseBase } from './task-module-response-base';

/**
 * @interface
 * An interface representing TaskModuleMessageResponse.
 * Task Module response with message action.
 *
 * @extends TaskModuleResponseBase
 */
export interface TaskModuleMessageResponse extends TaskModuleResponseBase {
  /**
   * @member {string} [value] Teams will display the value of value in a popup
   * message box.
   */
  value?: string;
}
