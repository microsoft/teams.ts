import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/owners': Operation<'/groups/{group-id}/owners', 'get'>;
}

/**
 * `GET /groups/{group-id}/owners`
 *
 * Retrieve a list of the group&#x27;s owners. The owners are a set of users who are allowed to modify the group object. Owners are currently not available in Microsoft Graph for groups that were created in Exchange, distribution groups, or groups that are synchronized from an on-premises environment.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/owners']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/owners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/owners',
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
