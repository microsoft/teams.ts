import { CacheInfo } from '../cache-info';

import { MessagingExtensionResult } from './messaging-extension-result';

/**
 * @interface
 * An interface representing MessagingExtensionResponse.
 * Messaging extension response
 *
 */
export interface MessagingExtensionResponse {
  /**
   * @member {MessagingExtensionResult} [composeExtension]
   */
  composeExtension?: MessagingExtensionResult;

  /**
   * @member {CacheInfo} [cacheInfo] The cache info for this response
   */
  cacheInfo?: CacheInfo;
}
