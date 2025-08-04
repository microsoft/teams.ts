import { InstallUpdateActivity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type InstallActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in InstallUpdateActivity['action']as `install.${K}`]?: RouteHandler<
    IActivityContext<Extract<InstallUpdateActivity, { action: K }>, TExtraCtx>,
    void
  >;
};
