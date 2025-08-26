export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/tabs': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/tabs': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/tabs`
 *
 * A collection of all the tabs in the channel.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs',
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
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
