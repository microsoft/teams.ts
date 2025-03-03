import { MessageDeleteActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type MessageDeleteActivityRoutes = {
  [K in MessageDeleteActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<MessageDeleteActivity>,
    void
  >;
};
