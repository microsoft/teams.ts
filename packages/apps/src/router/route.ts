import { Activity } from '@microsoft/teams.api';

import { IRoutes } from '../routes';

export type RouteType = 'system' | 'user';
export type Route<
  Name extends keyof IRoutes = keyof IRoutes,
  TExtraCtx extends Record<string, any> = Record<string, any>
> = {
  readonly name?: Name;
  readonly type: 'system' | 'user';
  readonly select: (activity: Activity) => boolean;
  readonly callback: IRoutes<TExtraCtx>[Name];
};
