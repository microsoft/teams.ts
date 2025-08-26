import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timeOffRequests`
 *
 * The time off requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
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
 * `GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 * The time off requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeOffRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
