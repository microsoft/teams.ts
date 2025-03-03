import { CacheInfo } from '../cache-info';
import { TaskModuleContinueResponse, TaskModuleMessageResponse } from '../task-module';

import { MessagingExtensionResult } from './messaging-extension-result';

/**
 * @interface
 * An interface representing MessagingExtensionActionResponse.
 * Response of messaging extension action
 *
 */
export interface MessagingExtensionActionResponse {
  /**
   * @member {TaskModuleContinueResponse | TaskModuleMessageResponse} [task] The JSON for the response to
   * appear in the task module.
   */
  task?: TaskModuleContinueResponse | TaskModuleMessageResponse;

  /**
   * @member {MessagingExtensionResult} [composeExtension]
   */
  composeExtension?: MessagingExtensionResult;

  /**
   * @member {CacheInfo} [cacheInfo] The cache info for this response
   */
  cacheInfo?: CacheInfo;
}
