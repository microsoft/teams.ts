import { InstallUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { MiddlewareContext } from '../middleware-context';

export type InstallActivityRoutes = {
  [K in InstallUpdateActivity['action'] as `install.${K}`]?: RouteHandler<
    MiddlewareContext<Extract<InstallUpdateActivity, { action: K }>>,
    void
  >;
};
