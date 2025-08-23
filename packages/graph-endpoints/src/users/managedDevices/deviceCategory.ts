import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
 *
 * Device category
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
