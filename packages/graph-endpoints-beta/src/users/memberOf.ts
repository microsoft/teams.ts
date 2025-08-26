import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/memberOf': Operation<'/users/{user-id}/memberOf', 'get'>;
  'GET /users/{user-id}/memberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/memberOf`
 *
 * Get groups, directory roles, and administrative units that the user is a direct member of. This operation isn&#x27;t transitive. To retrieve groups, directory roles, and administrative units that the user is a member through transitive membership, use the List user transitive memberOf API.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/memberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/memberOf',
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
 * `GET /users/{user-id}/memberOf/{directoryObject-id}`
 *
 * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/memberOf/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/memberOf/{directoryObject-id}',
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
