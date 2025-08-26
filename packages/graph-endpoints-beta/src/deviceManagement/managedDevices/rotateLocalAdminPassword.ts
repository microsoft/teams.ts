import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword`
 *
 * Initiates a manual rotation for the local admin password on the device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
