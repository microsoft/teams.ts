import { isAdaptiveCard } from '@microsoft/teams.cards';

import { ActivityParams } from '../../clients';
import { ActivityLike } from '../../models';
import { MessageActivity } from '../message';

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
  } else if (isAdaptiveCard(activity)) {
    activity = new MessageActivity().addCard('adaptive', activity);
  }

  return activity;
}
