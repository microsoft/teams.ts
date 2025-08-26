import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword`
 *
 * Initiates a manual rotation for the local admin password on the device
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
