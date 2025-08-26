import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/incomingChannels': Operation<'/teams/{team-id}/incomingChannels', 'get'>;
  'GET /teams/{team-id}/incomingChannels/{channel-id}': Operation<
    '/teams/{team-id}/incomingChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/incomingChannels`
 *
 * Get the list of incoming channels (channels shared with a team).
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/incomingChannels']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/incomingChannels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/incomingChannels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/incomingChannels/{channel-id}`
 *
 * List of channels shared with the team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/incomingChannels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/incomingChannels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/incomingChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
