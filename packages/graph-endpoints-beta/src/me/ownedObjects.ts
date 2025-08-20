import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/ownedObjects': Operation<'/me/ownedObjects', 'get'>;
  'GET /me/ownedObjects/{directoryObject-id}': Operation<
    '/me/ownedObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/ownedObjects`
 *
 * Get the list of directory objects that are owned by the user.
 */
export function list(
  params?: IEndpoints['GET /me/ownedObjects']['parameters']
): EndpointRequest<IEndpoints['GET /me/ownedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/ownedObjects',
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
    ],
    params,
  };
}

/**
 * `GET /me/ownedObjects/{directoryObject-id}`
 *
 * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function get(
  params?: IEndpoints['GET /me/ownedObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/ownedObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/ownedObjects/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
