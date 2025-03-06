import { CacheInfo } from '../cache-info';

import { TaskModuleContinueResponse } from './task-module-continue-response';
import { TaskModuleMessageResponse } from './task-module-message-response';

/**
 *
 * An interface representing TaskModuleResponse.
 * Envelope for Task Module Response.
 */
export type TaskModuleResponse = {
  /**
   * @member {TaskModuleContinueResponse | TaskModuleMessageResponse} [task] The JSON for the response to
   * appear in the task module.
   */
  task?: TaskModuleContinueResponse | TaskModuleMessageResponse;

  /**
   * @member {CacheInfo} [cacheInfo] The cache info for this response
   */
  cacheInfo?: CacheInfo;
};
