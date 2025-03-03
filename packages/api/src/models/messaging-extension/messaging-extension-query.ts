import { MessagingExtensionParameter } from './messaging-extension-parameter';

/**
 * @interface
 * An interface representing MessagingExtensionQueryOptions.
 * Messaging extension query options
 *
 */
export interface MessagingExtensionQueryOptions {
  /**
   * @member {number} [skip] Number of entities to skip
   */
  skip?: number;

  /**
   * @member {number} [count] Number of entities to fetch
   */
  count?: number;
}

/**
 * @interface
 * An interface representing MessagingExtensionQuery.
 * Messaging extension query
 *
 */
export interface MessagingExtensionQuery {
  /**
   * @member {string} [commandId] Id of the command assigned by Bot
   */
  commandId?: string;

  /**
   * @member {MessagingExtensionParameter[]} [parameters] Parameters for the
   * query
   */
  parameters?: MessagingExtensionParameter[];

  /**
   * @member {MessagingExtensionQueryOptions} [queryOptions]
   */
  queryOptions?: MessagingExtensionQueryOptions;

  /**
   * @member {string} [state] State parameter passed back to the bot after
   * authentication/configuration flow
   */
  state?: string;
}
