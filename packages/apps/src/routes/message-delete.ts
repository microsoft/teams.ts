import { IMessageDeleteActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IMiddlewareContext } from '../contexts';

export type MessageDeleteActivityRoutes = {
  [K in IMessageDeleteActivity['channelData']['eventType'] as K]?: RouteHandler<
    IMiddlewareContext<IMessageDeleteActivity>,
    void
  >;
};
