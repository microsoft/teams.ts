import { InstallUpdateActivity } from '@microsoft/teams.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type InstallActivityRoutes = {
  [K in InstallUpdateActivity['action'] as `install.${K}`]?: RouteHandler<
    IActivityContext<Extract<InstallUpdateActivity, { action: K }>>,
    void
  >;
};
