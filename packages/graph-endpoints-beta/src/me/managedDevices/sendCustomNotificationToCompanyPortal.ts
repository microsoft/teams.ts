import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
