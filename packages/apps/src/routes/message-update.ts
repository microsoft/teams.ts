import { IMessageUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type MessageUpdateActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in IMessageUpdateActivity['channelData']['eventType']as K]?: RouteHandler<
    IActivityContext<IMessageUpdateActivity, TExtraCtx>,
    void
  >;
};
