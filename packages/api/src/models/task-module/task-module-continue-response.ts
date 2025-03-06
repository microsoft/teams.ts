import { TaskModuleResponseBase } from './task-module-response-base';
import { TaskModuleTaskInfo } from './task-module-task-info';

/**
 *
 * An interface representing TaskModuleContinueResponse.
 * Task Module Response with continue action.
 *
 * @extends TaskModuleResponseBase
 */
export type TaskModuleContinueResponse = TaskModuleResponseBase & {
  /**
   * @member {TaskModuleTaskInfo} [value] The JSON for the Adaptive card to
   * appear in the task module.
   */
  value?: TaskModuleTaskInfo;
};
