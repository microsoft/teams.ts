import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/people': Operation<'/users/{user-id}/people', 'get'>;
  'GET /users/{user-id}/people/{person-id}': Operation<
    '/users/{user-id}/people/{person-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/people`
 *
 * People that are relevant to the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/people']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/people']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/people',
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
 * `GET /users/{user-id}/people/{person-id}`
 *
 * People that are relevant to the user. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/people/{person-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/people/{person-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/people/{person-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'person-id', in: 'path' },
    ],
    params,
  };
}
