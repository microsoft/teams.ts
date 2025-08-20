import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/transitiveMemberOf': Operation<
    '/users/{user-id}/transitiveMemberOf',
    'get'
  >;
  'GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/transitiveMemberOf`
 *
 * Get groups, directory roles, and administrative units that the user is a member of through either direct or transitive membership.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/transitiveMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/transitiveMemberOf']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/transitiveMemberOf',
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
 * `GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}`
 *
 * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/transitiveMemberOf/{directoryObject-id}',
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
