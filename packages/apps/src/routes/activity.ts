import { Activity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type ActivityRoutes = {
  [K in Activity['type']]?: RouteHandler<IActivityContext<Extract<Activity, { type: K }>>>;
};
