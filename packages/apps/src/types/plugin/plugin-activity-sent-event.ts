import { ConversationReference, SentActivity } from '@microsoft/spark.api';

import { IPluginEvent } from './plugin-event';
import { ISender } from './sender';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IPluginActivitySentEvent
  extends IPluginEvent<'activity.sent'>,
    ConversationReference {
  /**
   * the sender of the activity
   */
  readonly sender: ISender;

  /**
   * the sent activity
   */
  readonly activity: SentActivity;
}
