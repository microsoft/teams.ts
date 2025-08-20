import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
