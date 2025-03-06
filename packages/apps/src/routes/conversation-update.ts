import { IConversationUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type ConversationUpdateActivityRoutes = {
  [K in IConversationUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    MiddlewareContext<IConversationUpdateActivity>,
    void
  >;
};
