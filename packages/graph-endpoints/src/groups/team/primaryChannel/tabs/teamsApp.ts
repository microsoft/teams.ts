import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp`
 *
 * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}
