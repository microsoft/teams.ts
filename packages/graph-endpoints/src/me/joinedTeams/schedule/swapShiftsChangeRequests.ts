import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
 *
 * The swap requests for shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
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
 * `GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 * The swap requests for shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
