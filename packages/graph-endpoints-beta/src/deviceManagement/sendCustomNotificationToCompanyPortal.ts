import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/sendCustomNotificationToCompanyPortal': Operation<
    '/deviceManagement/sendCustomNotificationToCompanyPortal',
    'post'
  >;
}

/**
 * `POST /deviceManagement/sendCustomNotificationToCompanyPortal`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/sendCustomNotificationToCompanyPortal']['body'],
  params?: IEndpoints['POST /deviceManagement/sendCustomNotificationToCompanyPortal']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/sendCustomNotificationToCompanyPortal']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/sendCustomNotificationToCompanyPortal',
    paramDefs: [],
    params,
    body,
  };
}
