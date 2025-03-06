import { CacheInfo } from '../cache-info';
import { TaskModuleResponse } from '../task-module';

import { ConfigAuth } from './config-auth';

/**
 *
 * An interface container for the Config response payload
 */
export type ConfigResponse = {
  /**
   * @member {CacheInfo} [cacheInfo] The data of the ConfigResponse cache, including cache type and cache duration.
   */
  cacheInfo?: CacheInfo;

  /**
   * @member {ConfigResponseConfig} [config] The ConfigResponse config of BotConfigAuth or TaskModuleResponse
   */
  config: ConfigAuth | TaskModuleResponse;

  /**
   * @member {string} [responseType] The type of response 'config'.
   */
  responseType: 'config';
};
