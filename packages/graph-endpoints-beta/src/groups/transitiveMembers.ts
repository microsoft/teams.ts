import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/transitiveMembers': Operation<
    '/groups/{group-id}/transitiveMembers',
    'get'
  >;
  'GET /groups/{group-id}/transitiveMembers/{directoryObject-id}': Operation<
    '/groups/{group-id}/transitiveMembers/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/transitiveMembers`
 *
 * Get a list of a group&#x27;s members. A group can have different object types as members. For more information about supported member types for different groups, see Group membership. This operation is transitive and returns a flat list of all nested members. An attempt to filter by an OData cast that represents an unsupported member type returns a 400 Bad Request error with the Request_UnsupportedQuery code.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/transitiveMembers']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/transitiveMembers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/transitiveMembers',
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
 * `GET /groups/{group-id}/transitiveMembers/{directoryObject-id}`
 *
 * The direct and transitive members of a group. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/transitiveMembers/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/transitiveMembers/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/transitiveMembers/{directoryObject-id}',
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
