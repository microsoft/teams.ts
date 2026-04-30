import { ITaskSubmitInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type DialogSubmitSubRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in `dialog.submit.${string}`]?: RouteHandler<
    IActivityContext<ITaskSubmitInvokeActivity, TExtraCtx>,
    InvokeResponse<'task/submit'> | InvokeResponse<'task/submit'>['body']
  >;
};
