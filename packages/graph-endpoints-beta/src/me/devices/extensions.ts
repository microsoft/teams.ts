import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/devices/{device-id}/extensions': Operation<'/me/devices/{device-id}/extensions', 'get'>;
  'GET /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/devices/{device-id}/extensions': Operation<
    '/me/devices/{device-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/devices/{device-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/devices/{device-id}/extensions`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/extensions',
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
 * `GET /me/devices/{device-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/devices/{device-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/devices/{device-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/devices/{device-id}/extensions']['body'],
  params?: IEndpoints['POST /me/devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/devices/{device-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/devices/{device-id}/extensions',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
