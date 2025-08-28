export * as commands from './commands';
export * as deviceTemplate from './deviceTemplate';
export * as extensions from './extensions';
export * as memberOf from './memberOf';
export * as registeredOwners from './registeredOwners';
export * as registeredUsers from './registeredUsers';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as usageRights from './usageRights';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'delete'
  >;
  'GET /users/{user-id}/devices': Operation<'/users/{user-id}/devices', 'get'>;
  'GET /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'patch'
  >;
  'POST /users/{user-id}/devices': Operation<'/users/{user-id}/devices', 'post'>;
}

/**
 * `DELETE /users/{user-id}/devices/{device-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/devices']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/devices/{device-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/devices`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/devices']['body'],
  params?: IEndpoints['POST /users/{user-id}/devices']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/devices',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
