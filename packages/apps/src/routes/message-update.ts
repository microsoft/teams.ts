import { IMessageUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IMiddlewareContext } from '../contexts';

export type MessageUpdateActivityRoutes = {
  [K in IMessageUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IMiddlewareContext<IMessageUpdateActivity>,
    void
  >;
};
