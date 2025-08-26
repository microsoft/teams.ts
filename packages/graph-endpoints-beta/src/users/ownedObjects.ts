import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/ownedObjects': Operation<'/users/{user-id}/ownedObjects', 'get'>;
  'GET /users/{user-id}/ownedObjects/{directoryObject-id}': Operation<
    '/users/{user-id}/ownedObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/ownedObjects`
 *
 * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/ownedObjects']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/ownedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/ownedObjects',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /users/{user-id}/ownedObjects/{directoryObject-id}`
 *
 * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/ownedObjects/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/ownedObjects/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/ownedObjects/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
