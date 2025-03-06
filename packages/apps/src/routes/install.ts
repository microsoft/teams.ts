import { InstallUpdateActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IMiddlewareContext } from '../contexts';

export type InstallActivityRoutes = {
  [K in InstallUpdateActivity['action'] as `install.${K}`]?: RouteHandler<
    IMiddlewareContext<Extract<InstallUpdateActivity, { action: K }>>,
    void
  >;
};
