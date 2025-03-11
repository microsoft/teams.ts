import { IMessageExtensionSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { IActivityContext } from '../../contexts';

export type MessageExtensionSubmitActivityRoutes = {
  [K in IMessageExtensionSubmitActionInvokeActivity['value']['botMessagePreviewAction'] as `message.ext.${K}`]?: RouteHandler<
    IActivityContext<IMessageExtensionSubmitActionInvokeActivity>,
    | InvokeResponse<'composeExtension/submitAction'>
    | InvokeResponse<'composeExtension/submitAction'>['body']
  >;
};
