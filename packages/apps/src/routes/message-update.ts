import { IMessageUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type MessageUpdateActivityRoutes = {
  [K in IMessageUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IMessageUpdateActivity>,
    void
  >;
};
