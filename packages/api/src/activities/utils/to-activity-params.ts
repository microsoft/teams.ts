import { isCard } from '@microsoft/spark.cards';

import { ActivityParams } from '../../clients';
import { ActivityLike } from '../../models';

import { isActivityBuilder } from '../builder';
import { MessageActivityBuilder } from '../message';

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
    activity = new MessageActivityBuilder('').card('adaptive', activity).build();
  }

  return activity;
}
