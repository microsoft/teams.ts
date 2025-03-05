import * as api from '@microsoft/spark.api';

import { MiddlewareContext } from '../middleware-context';

export function removeMentionsText(options?: api.RemoveMentionsTextOptions) {
  return ({ activity }: MiddlewareContext) => {
    if (
      activity.type === 'message' ||
      activity.type === 'messageUpdate' ||
      activity.type === 'typing'
    ) {
      activity.text = api.removeMentionsText(activity, options);
    }
  };
}
