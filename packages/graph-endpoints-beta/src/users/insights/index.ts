export * as shared from './shared';
export * as trending from './trending';
export * as used from './used';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights': Operation<'/users/{user-id}/insights', 'delete'>;
  'GET /users/{user-id}/insights': Operation<'/users/{user-id}/insights', 'get'>;
  'PATCH /users/{user-id}/insights': Operation<'/users/{user-id}/insights', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/insights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/insights']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/insights',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights`
 *
 * Represents relationships between a user and items such as OneDrive for work or school documents, calculated using advanced analytics and machine learning techniques. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/insights']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/insights']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/insights',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
