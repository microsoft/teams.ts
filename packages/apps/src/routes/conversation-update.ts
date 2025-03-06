import { IConversationUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IMiddlewareContext } from '../contexts';

export type ConversationUpdateActivityRoutes = {
  [K in IConversationUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IMiddlewareContext<IConversationUpdateActivity>,
    void
  >;
};
