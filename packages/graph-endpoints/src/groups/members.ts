import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/members': Operation<'/groups/{group-id}/members', 'get'>;
}

/**
 * `GET /groups/{group-id}/members`
 *
 * Get a list of the group&#x27;s direct members. A group can have users, organizational contacts, devices, service principals and other groups as members. This operation is not transitive.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/members']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/members',
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
