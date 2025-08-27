export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/tabs': Operation<
    '/teams/{team-id}/primaryChannel/tabs',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/tabs': Operation<
    '/teams/{team-id}/primaryChannel/tabs',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/tabs`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/tabs']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/tabs',
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
 * `GET /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/tabs']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/tabs']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/tabs',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
