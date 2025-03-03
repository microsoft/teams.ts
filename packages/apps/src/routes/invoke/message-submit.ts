import { MessageSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { MiddlewareContext } from '../../middleware-context';

export type MessageSubmitActivityRoutes = {
  [K in MessageSubmitActionInvokeActivity['value']['actionName'] as `message.submit.${K}`]?: RouteHandler<
    MiddlewareContext<Extract<MessageSubmitActionInvokeActivity, { value: { actionName: K } }>>,
    InvokeResponse<'message/submitAction'>
  >;
};
