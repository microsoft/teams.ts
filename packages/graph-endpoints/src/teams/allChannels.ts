import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/allChannels': Operation<'/teams/{team-id}/allChannels', 'get'>;
  'GET /teams/{team-id}/allChannels/{channel-id}': Operation<
    '/teams/{team-id}/allChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/allChannels`
 *
 * Get the list of channels either in this team or shared with this team (incoming channels).
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/allChannels']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/allChannels']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/allChannels',
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
 * `GET /teams/{team-id}/allChannels/{channel-id}`
 *
 * List of channels either hosted in or shared with the team (incoming channels).
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/allChannels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/allChannels/{channel-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/allChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
