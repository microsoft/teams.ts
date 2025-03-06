import { IMessageDeleteActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type MessageDeleteActivityRoutes = {
  [K in IMessageDeleteActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<IMessageDeleteActivity>,
    void
  >;
};
