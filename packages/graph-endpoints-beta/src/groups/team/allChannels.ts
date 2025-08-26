import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/allChannels': Operation<
    '/groups/{group-id}/team/allChannels',
    'get'
  >;
  'GET /groups/{group-id}/team/allChannels/{channel-id}': Operation<
    '/groups/{group-id}/team/allChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/allChannels`
 *
 * List of channels either hosted in or shared with the team (incoming channels).
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/allChannels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/allChannels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/allChannels',
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
 * `GET /groups/{group-id}/team/allChannels/{channel-id}`
 *
 * List of channels either hosted in or shared with the team (incoming channels).
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/allChannels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/allChannels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/allChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
