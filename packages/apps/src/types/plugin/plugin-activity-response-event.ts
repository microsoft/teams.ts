import { Activity, ConversationReference, InvokeResponse } from '@microsoft/teams.api';

/**
 * the event emitted by a plugin
 * before an activity response is sent
 */
export interface IPluginActivityResponseEvent extends ConversationReference {
  /**
   * inbound request activity payload
   */
  readonly activity: Activity;

  /**
   * the response
   */
  readonly response: InvokeResponse;
}
