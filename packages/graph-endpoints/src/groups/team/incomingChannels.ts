import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/incomingChannels': Operation<
    '/groups/{group-id}/team/incomingChannels',
    'get'
  >;
  'GET /groups/{group-id}/team/incomingChannels/{channel-id}': Operation<
    '/groups/{group-id}/team/incomingChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/incomingChannels`
 *
 * List of channels shared with the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/incomingChannels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/incomingChannels']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/incomingChannels',
    paramDefs: [
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
 * `GET /groups/{group-id}/team/incomingChannels/{channel-id}`
 *
 * List of channels shared with the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/incomingChannels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/incomingChannels/{channel-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/incomingChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
