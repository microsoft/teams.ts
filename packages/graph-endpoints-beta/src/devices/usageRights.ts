import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/devices/{device-id}/usageRights/{usageRight-id}',
    'delete'
  >;
  'GET /devices/{device-id}/usageRights': Operation<'/devices/{device-id}/usageRights', 'get'>;
  'GET /devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/devices/{device-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/devices/{device-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'POST /devices/{device-id}/usageRights': Operation<'/devices/{device-id}/usageRights', 'post'>;
}

/**
 * `DELETE /devices/{device-id}/usageRights/{usageRight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /devices/{device-id}/usageRights/{usageRight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/devices/{device-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /devices/{device-id}/usageRights`
 *
 * Retrieve a list of usageRight objects for a given device.
 */
export function list(
  params?: IEndpoints['GET /devices/{device-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/usageRights',
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
 * `GET /devices/{device-id}/usageRights/{usageRight-id}`
 *
 * Represents the usage rights a device has been granted.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/usageRights/{usageRight-id}',
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
 * `PATCH /devices/{device-id}/usageRights/{usageRight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /devices/{device-id}/usageRights/{usageRight-id}']['body'],
  params?: IEndpoints['PATCH /devices/{device-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /devices/{device-id}/usageRights/{usageRight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/devices/{device-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'device-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /devices/{device-id}/usageRights`
 *
 */
export function create(
  body: IEndpoints['POST /devices/{device-id}/usageRights']['body'],
  params?: IEndpoints['POST /devices/{device-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/devices/{device-id}/usageRights',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
