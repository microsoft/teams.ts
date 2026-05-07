import {
  type Activity,
  type StripMentionsTextOptions,
  stripMentionsText as apiStripMentionsText
} from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';

export function stripMentionsText(options?: StripMentionsTextOptions) {
  return ({ activity, next }: IActivityContext<Activity, any>) => {
    if (
      activity.type === 'message' ||
      activity.type === 'messageUpdate' ||
      activity.type === 'typing'
    ) {
      activity.text = apiStripMentionsText(activity, options);
    }

    return next();
  };
}
