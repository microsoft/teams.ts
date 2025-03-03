import { ConversationUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type ConversationUpdateActivityRoutes = {
  [K in ConversationUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<ConversationUpdateActivity>,
    void
  >;
};
