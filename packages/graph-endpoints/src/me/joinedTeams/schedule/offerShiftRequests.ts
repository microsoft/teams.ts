import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests`
 *
 * The offer requests for shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
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
 * `GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 * The offer requests for shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
