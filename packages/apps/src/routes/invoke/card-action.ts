import { IAdaptiveCardActionInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type CardActionSubRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in `card.action.${string}`]?: RouteHandler<
    IActivityContext<IAdaptiveCardActionInvokeActivity, TExtraCtx>,
    InvokeResponse<'adaptiveCard/action'> | InvokeResponse<'adaptiveCard/action'>['body']
  >;
};
