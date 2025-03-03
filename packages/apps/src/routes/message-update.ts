import { MessageUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type MessageUpdateActivityRoutes = {
  [K in MessageUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<MessageUpdateActivity>,
    void
  >;
};
