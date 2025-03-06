import { IMessageExtensionSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { IMiddlewareContext } from '../../contexts';

export type MessageExtensionSubmitActivityRoutes = {
  [K in IMessageExtensionSubmitActionInvokeActivity['value']['botMessagePreviewAction'] as `message.ext.${K}`]?: RouteHandler<
    IMiddlewareContext<IMessageExtensionSubmitActionInvokeActivity>,
    InvokeResponse<'composeExtension/submitAction'>
  >;
};
