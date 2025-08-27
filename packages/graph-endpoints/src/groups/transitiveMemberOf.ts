import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/transitiveMemberOf': Operation<
    '/groups/{group-id}/transitiveMemberOf',
    'get'
  >;
  'GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/groups/{group-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/transitiveMemberOf`
 *
 * Get groups that the group is a member of. This operation is transitive and will also include all groups that this group is a nested member of. Unlike getting a user&#x27;s Microsoft 365 groups, this returns all types of groups, not just Microsoft 365 groups.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/transitiveMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/transitiveMemberOf']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/transitiveMemberOf',
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
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}`
 *
 * The groups that a group is a member of, either directly or through nested membership. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/transitiveMemberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
