import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /users/{user-id}/devices/{device-id}/extensions': Operation<
    '/users/{user-id}/devices/{device-id}/extensions',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /users/{user-id}/devices/{device-id}/extensions': Operation<
    '/users/{user-id}/devices/{device-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/extensions`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/devices/{device-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['body'],
  params?: IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/devices/{device-id}/extensions',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
    body,
  };
}
