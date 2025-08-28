export * as instances from './instances';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'delete'
  >;
  'GET /users/{user-id}/settings/windows': Operation<'/users/{user-id}/settings/windows', 'get'>;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'patch'
  >;
  'POST /users/{user-id}/settings/windows': Operation<'/users/{user-id}/settings/windows', 'post'>;
}

/**
 * `DELETE /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 * Delete all windowsSetting objects of a user.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/windows`
 *
 * The Windows settings of the user stored in the cloud.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/windows']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/windows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/windows',
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
 * `GET /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 * The Windows settings of the user stored in the cloud.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/settings/windows`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/settings/windows']['body'],
  params?: IEndpoints['POST /users/{user-id}/settings/windows']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/settings/windows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/settings/windows',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
