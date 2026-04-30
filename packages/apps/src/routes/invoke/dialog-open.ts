import { ITaskFetchInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type DialogOpenSubRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in `dialog.open.${string}`]?: RouteHandler<
    IActivityContext<ITaskFetchInvokeActivity, TExtraCtx>,
    InvokeResponse<'task/fetch'> | InvokeResponse<'task/fetch'>['body']
  >;
};
