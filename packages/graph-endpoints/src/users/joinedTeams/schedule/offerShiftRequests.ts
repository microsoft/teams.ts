import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests`
 *
 * The offer requests for shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 * The offer requests for shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
