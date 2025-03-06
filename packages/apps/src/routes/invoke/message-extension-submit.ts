import { IMessageExtensionSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { MiddlewareContext } from '../../middleware-context';

export type MessageExtensionSubmitActivityRoutes = {
  [K in IMessageExtensionSubmitActionInvokeActivity['value']['botMessagePreviewAction'] as `message.ext.${K}`]?: RouteHandler<
    MiddlewareContext<IMessageExtensionSubmitActionInvokeActivity>,
    InvokeResponse<'composeExtension/submitAction'>
  >;
};
