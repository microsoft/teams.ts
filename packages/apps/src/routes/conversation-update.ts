import { IConversationUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type ConversationUpdateActivityRoutes = {
  [K in IConversationUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IConversationUpdateActivity>,
    void
  >;
};
