import { Activity, ConversationReference, IToken } from '@microsoft/teams.api';

import { ISender } from './sender';

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IPluginActivityEvent extends ConversationReference {
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
