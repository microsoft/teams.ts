export * as notebooks from './notebooks';
export * as operations from './operations';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'delete'>;
  'GET /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'get'>;
  'PATCH /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/onenote']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onenote',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/onenote']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onenote',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
