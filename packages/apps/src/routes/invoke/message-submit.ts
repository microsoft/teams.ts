import { IMessageSubmitActionInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type MessageSubmitActivityRoutes = {
  [K in IMessageSubmitActionInvokeActivity['value']['actionName'] as `message.submit.${K}`]?: RouteHandler<
    IActivityContext<Extract<IMessageSubmitActionInvokeActivity, { value: { actionName: K } }>>,
    InvokeResponse<'message/submitAction'> | InvokeResponse<'message/submitAction'>['body']
  >;
};
