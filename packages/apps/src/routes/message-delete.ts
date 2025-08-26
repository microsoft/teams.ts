import { IMessageDeleteActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type MessageDeleteActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in IMessageDeleteActivity['channelData']['eventType']as K]?: RouteHandler<
    IActivityContext<IMessageDeleteActivity, TExtraCtx>,
    void
  >;
};
