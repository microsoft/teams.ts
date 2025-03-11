import { IMessageSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { IActivityContext } from '../../contexts';

export type MessageSubmitActivityRoutes = {
  [K in IMessageSubmitActionInvokeActivity['value']['actionName'] as `message.submit.${K}`]?: RouteHandler<
    IActivityContext<Extract<IMessageSubmitActionInvokeActivity, { value: { actionName: K } }>>,
    InvokeResponse<'message/submitAction'> | InvokeResponse<'message/submitAction'>['body']
  >;
};
