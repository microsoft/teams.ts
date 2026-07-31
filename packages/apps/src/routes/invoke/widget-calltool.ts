import { IHtmlWidgetCallToolInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

/**
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export type WidgetCallToolRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  'widget.callTool'?: RouteHandler<
    IActivityContext<IHtmlWidgetCallToolInvokeActivity, TExtraCtx>,
    InvokeResponse<'htmlwidget/calltool'> | InvokeResponse<'htmlwidget/calltool'>['body']
  >;
};
