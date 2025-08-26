export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * Removes (unpins) a tab from the specified channel within a team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/tabs`
 *
 * Retrieve the list of tabs in the specified channel within a team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/tabs',
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
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * Retrieve the properties and relationships of the specified tab in a channel within a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
  *
  * Update the properties of the specified tab.
This API can be used to configure the content of the tab.
  */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/tabs`
 *
 * Add (pin) a tab to the specified channel within a team. The app must be preinstalled in the team and have the configurableTabs property defined in the app manifest.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/tabs',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
