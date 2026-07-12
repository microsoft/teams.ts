import { isAdaptiveCard } from '@microsoft/teams.cards';

import type { ActivityParams } from '../../clients';
import type { ActivityLike } from '../../models';
import { MessageActivity, MessageActivityInput } from '../message';
import { TypingActivity, TypingActivityInput } from '../typing';

/**
 * @hidden
 * @internal
 *
 * Transforms supported send types into a normalized OUTBOUND message/typing input.
 */
export function toActivityParams(activity: ActivityLike): ActivityParams {
  if (typeof activity === 'string') {
    activity = {
      type: 'message',
      text: activity,
    };
  } else if (isAdaptiveCard(activity)) {
    activity = new MessageActivityInput().addCard('adaptive', activity);
  } else if (activity instanceof MessageActivity) {
    activity = MessageActivityInput.from(activity);
  } else if (activity instanceof TypingActivity) {
    activity = TypingActivityInput.from(activity);
  }

  return activity;
}
