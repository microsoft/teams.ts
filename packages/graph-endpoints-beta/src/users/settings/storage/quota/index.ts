export * as services from './services';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'delete'
  >;
  'GET /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'get'
  >;
  'PATCH /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/storage/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/storage/quota`
 *
 * Read the properties and relationships of a unifiedStorageQuota object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/storage/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
