import { IMessageDeleteActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type MessageDeleteActivityRoutes = {
  [K in IMessageDeleteActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IMessageDeleteActivity>,
    void
  >;
};
