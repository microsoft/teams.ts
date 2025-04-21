import { IMessageDeleteActivity } from '@microsoft/teams.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type MessageDeleteActivityRoutes = {
  [K in IMessageDeleteActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IMessageDeleteActivity>,
    void
  >;
};
