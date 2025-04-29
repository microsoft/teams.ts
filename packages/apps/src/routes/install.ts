import { InstallUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type InstallActivityRoutes = {
  [K in InstallUpdateActivity['action'] as `install.${K}`]?: RouteHandler<
    IActivityContext<Extract<InstallUpdateActivity, { action: K }>>,
    void
  >;
};
