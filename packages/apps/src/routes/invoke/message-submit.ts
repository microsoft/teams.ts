import { IMessageSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { IMiddlewareContext } from '../../contexts';

export type MessageSubmitActivityRoutes = {
  [K in IMessageSubmitActionInvokeActivity['value']['actionName'] as `message.submit.${K}`]?: RouteHandler<
    IMiddlewareContext<Extract<IMessageSubmitActionInvokeActivity, { value: { actionName: K } }>>,
    InvokeResponse<'message/submitAction'>
  >;
};
