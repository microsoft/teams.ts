import { IConversationUpdateActivity } from '@microsoft/teams.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type ConversationUpdateActivityRoutes = {
  [K in IConversationUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IConversationUpdateActivity>,
    void
  >;
};
