import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timeOffReasons`
 *
 * The set of reasons for a time off in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
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
 * `GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * The set of reasons for a time off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeOffReasons`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
