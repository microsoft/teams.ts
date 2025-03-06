import { IMessageUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type MessageUpdateActivityRoutes = {
  [K in IMessageUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<IMessageUpdateActivity>,
    void
  >;
};
