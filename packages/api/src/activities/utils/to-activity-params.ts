import { isCard } from '@microsoft/spark.cards';

import { ActivityParams } from '../../clients';
import { ActivityLike } from '../../models';

import { isActivityBuilder } from '../builder';
import { MessageSendActivityBuilder } from '../message';

/**
 * @hidden
 * @internal
 *
 * Transforms supported send types into a valid `ActivityParams` object
 */
export function toActivityParams(activity: ActivityLike): ActivityParams {
  if (typeof activity === 'string') {
    activity = {
      type: 'message',
      text: activity,
    };
  } else if (isActivityBuilder(activity)) {
    activity = activity.build();
  } else if (isCard(activity)) {
    activity = new MessageSendActivityBuilder('').card('adaptive', activity).build();
  }

  return activity;
}
