import * as api from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';

export function stripMentionsText(options?: api.StripMentionsTextOptions) {
  return ({ activity, next }: IActivityContext<api.Activity, any>) => {
    if (
      activity.type === 'message' ||
      activity.type === 'messageUpdate' ||
      activity.type === 'typing'
    ) {
      activity.text = api.stripMentionsText(activity, options);
    }

    return next();
  };
}
