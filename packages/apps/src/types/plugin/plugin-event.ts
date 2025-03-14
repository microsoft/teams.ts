import { ILogger, IStorage, Client } from '@microsoft/spark.common';

import { Manifest } from '../../manifest';
import { Credentials, IToken } from '@microsoft/spark.api';

/**
 * data sent to the plugin from the
 * parent app when a plugin lifecycle event
 * has occured
 */
export interface IPluginEvent<Type extends string = string> {
  /**
   * the event type
   */
  readonly type: Type;

  /**
   * the app id
   */
  readonly id?: string;

  /**
   * the app name
   */
  readonly name?: string;

  /**
   * the app `ILogger` instance
   */
  readonly logger: ILogger;

  /**
   * the app `http.Client` instance
   */
  readonly client: Client;

  /**
   * the app `IStorage` instance
   */
  readonly storage: IStorage;

  /**
   * the app manifest
   */
  readonly manifest: Partial<Manifest>;

  /**
   * the apps bot token
   */
  readonly botToken?: IToken;

  /**
   * the apps graph token
   */
  readonly graphToken?: IToken;

  /**
   * the apps credentials
   */
  readonly credentials?: Credentials;
}
