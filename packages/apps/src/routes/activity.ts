import { Activity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IMiddlewareContext } from '../contexts';

export type ActivityRoutes = {
  [K in Activity['type']]?: RouteHandler<IMiddlewareContext<Extract<Activity, { type: K }>>>;
};
