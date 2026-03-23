import { Activity, ConversationReference, IToken } from '@microsoft/teams.api';

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IPluginActivityEvent extends ConversationReference {
  /**
   * inbound request token
   */
  readonly token: IToken;

  /**
   * inbound request activity payload
   */
  readonly activity: Activity;
}
