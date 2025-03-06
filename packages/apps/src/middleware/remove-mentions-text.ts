import * as api from '@microsoft/spark.api';

import { IMiddlewareContext } from '../contexts';

export function removeMentionsText(options?: api.RemoveMentionsTextOptions) {
  return ({ activity, next }: IMiddlewareContext) => {
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
