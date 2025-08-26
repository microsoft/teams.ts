import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
