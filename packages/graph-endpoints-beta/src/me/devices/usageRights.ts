import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'delete'
  >;
  'GET /me/devices/{device-id}/usageRights': Operation<
    '/me/devices/{device-id}/usageRights',
    'get'
  >;
  'GET /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'POST /me/devices/{device-id}/usageRights': Operation<
    '/me/devices/{device-id}/usageRights',
    'post'
  >;
}

/**
 * `DELETE /me/devices/{device-id}/usageRights/{usageRight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/devices/{device-id}/usageRights`
 *
 * Represents the usage rights a device has been granted.
 */
export function list(
  params?: IEndpoints['GET /me/devices/{device-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/usageRights',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/devices/{device-id}/usageRights/{usageRight-id}`
 *
 * Represents the usage rights a device has been granted.
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/devices/{device-id}/usageRights/{usageRight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['body'],
  params?: IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'device-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/devices/{device-id}/usageRights`
 *
 */
export function create(
  body: IEndpoints['POST /me/devices/{device-id}/usageRights']['body'],
  params?: IEndpoints['POST /me/devices/{device-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['POST /me/devices/{device-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/devices/{device-id}/usageRights',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
