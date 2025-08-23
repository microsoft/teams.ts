import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/memberOf': Operation<'/groups/{group-id}/memberOf', 'get'>;
  'GET /groups/{group-id}/memberOf/{directoryObject-id}': Operation<
    '/groups/{group-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/memberOf`
 *
 * Get groups that the group is a direct member of. This operation is not transitive. Unlike getting a user&#x27;s Microsoft 365 groups, this returns all types of groups, not just Microsoft 365 groups.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/memberOf']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/memberOf',
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
 * `GET /groups/{group-id}/memberOf/{directoryObject-id}`
 *
 * Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/memberOf/{directoryObject-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/memberOf/{directoryObject-id}',
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
