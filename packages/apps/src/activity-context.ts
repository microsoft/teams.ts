import { ILogger } from '@microsoft/spark.common/logging';
import { IStorage } from '@microsoft/spark.common/storage';
import { Activity, ConversationReference } from '@microsoft/spark.api';

import { ApiClient } from './api';

export interface ActivityContext<T extends Activity = Activity> {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;

  /**
   * the app id of the bot
   */
  appId: string;

  /**
   * the inbound activity
   */
  activity: T;

  /**
   * the inbound activity conversation reference
   */
  ref: ConversationReference;

  /**
   * the app logger instance
   */
  log: ILogger;

  /**
   * the api client
   */
  api: ApiClient;

  /**
   * app storage instance
   */
  storage: IStorage;

  /**
   * whether the user has provided
   * their MSGraph credentials for use
   * via `api.user.*`
   */
  isSignedIn?: boolean;

  /**
   * extra data
   */
  [key: string]: any;
}
