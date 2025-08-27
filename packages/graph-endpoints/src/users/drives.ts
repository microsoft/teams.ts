import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/drives': Operation<'/users/{user-id}/drives', 'get'>;
  'GET /users/{user-id}/drives/{drive-id}': Operation<'/users/{user-id}/drives/{drive-id}', 'get'>;
}

/**
 * `GET /users/{user-id}/drives`
 *
 * A collection of drives available for this user. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/drives']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/drives']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/drives',
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
 * `GET /users/{user-id}/drives/{drive-id}`
 *
 * A collection of drives available for this user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/drives/{drive-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/drives/{drive-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
