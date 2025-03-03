import { Activity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type ActivityRoutes = {
  [K in Activity['type']]?: RouteHandler<MiddlewareContext<Extract<Activity, { type: K }>>>;
};
