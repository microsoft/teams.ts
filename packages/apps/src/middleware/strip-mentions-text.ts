import { type Activity, stripMentionsText as apiStripMentionsText } from '@microsoft/teams.api';

import type { AppStripMentionsTextOptions } from '../app.options';
import { IActivityContext } from '../contexts';

export function stripMentionsText(options: AppStripMentionsTextOptions = {}) {
  const { recipient, ...rest } = options;

  return ({ activity, next }: IActivityContext<Activity, any>) => {
    if (
      activity.type === 'message' ||
      activity.type === 'messageUpdate' ||
      activity.type === 'typing'
    ) {
      if (recipient && !activity.recipient?.id) {
        return next();
      }

      activity.text = apiStripMentionsText(activity, {
        ...rest,
        accountId: recipient ? activity.recipient.id : rest.accountId,
      });
    }

    return next();
  };
}
