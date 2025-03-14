import { Activity, ConversationReference, IToken } from '@microsoft/spark.api';

import { IPluginEvent } from './plugin-event';
import { ISender } from './sender';

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IPluginActivityEvent extends IPluginEvent<'activity'>, ConversationReference {
  /**
   * the sender
   */
  readonly sender: ISender;

  /**
   * inbound request token
   */
  readonly token: IToken;

  /**
   * inbound request activity payload
   */
  readonly activity: Activity;
}
