import * as api from '@microsoft/spark.api';

import { IActivityContext } from '../contexts';

export function removeMentionsText(options?: api.RemoveMentionsTextOptions) {
  return ({ activity, next }: IActivityContext) => {
    if (
      activity.type === 'message' ||
      activity.type === 'messageUpdate' ||
      activity.type === 'typing'
    ) {
      activity.text = api.removeMentionsText(activity, options);
    }

    return next();
  };
}
