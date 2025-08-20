import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/createdObjects': Operation<'/users/{user-id}/createdObjects', 'get'>;
  'GET /users/{user-id}/createdObjects/{directoryObject-id}': Operation<
    '/users/{user-id}/createdObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/createdObjects`
 *
 * Directory objects that the user created. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/createdObjects']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/createdObjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/createdObjects',
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
 * `GET /users/{user-id}/createdObjects/{directoryObject-id}`
 *
 * Directory objects that the user created. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/createdObjects/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/createdObjects/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/createdObjects/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
