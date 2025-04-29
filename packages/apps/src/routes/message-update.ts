import { IMessageUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type MessageUpdateActivityRoutes = {
  [K in IMessageUpdateActivity['channelData']['eventType'] as K]?: RouteHandler<
    IActivityContext<IMessageUpdateActivity>,
    void
  >;
};
