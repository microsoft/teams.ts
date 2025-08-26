import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/deviceCategory`
 *
 * Device category
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
