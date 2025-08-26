import { IConversationUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type ConversationUpdateActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in IConversationUpdateActivity['channelData']['eventType']as K]?: RouteHandler<
    IActivityContext<IConversationUpdateActivity, TExtraCtx>,
    void
  >;
};
