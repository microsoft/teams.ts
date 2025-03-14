import { Activity, ConversationReference, InvokeResponse } from '@microsoft/spark.api';

import { IPluginEvent } from './plugin-event';
import { ISender } from './sender';

/**
 * the event emitted by a plugin
 * before an activity response is sent
 */
export interface IPluginActivityResponseEvent
  extends IPluginEvent<'activity.response'>,
    ConversationReference {
  /**
   * the sender
   */
  readonly sender: ISender;

  /**
   * inbound request activity payload
   */
  readonly activity: Activity;

  /**
   * the response
   */
  readonly response: InvokeResponse;
}
