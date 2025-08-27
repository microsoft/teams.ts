import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage',
    'post'
  >;
}

/**
 * `POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage`
 *
 * Sends test message using the specified notificationMessageTemplate in the default locale
 */
export function create(
  body: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage']['body'],
  params?: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage',
    paramDefs: [{ name: 'notificationMessageTemplate-id', in: 'path' }],
    params,
    body,
  };
}
