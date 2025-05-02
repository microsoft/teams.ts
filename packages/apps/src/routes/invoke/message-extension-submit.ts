import { IMessageExtensionSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type MessageExtensionSubmitActivityRoutes = {
  [K in IMessageExtensionSubmitActionInvokeActivity['value']['botMessagePreviewAction'] as `message.ext.${K}`]?: RouteHandler<
    IActivityContext<IMessageExtensionSubmitActionInvokeActivity>,
    | InvokeResponse<'composeExtension/submitAction'>
    | InvokeResponse<'composeExtension/submitAction'>['body']
  >;
};
