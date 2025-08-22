import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons`
 *
 * The set of reasons for a time off in the schedule.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * The set of reasons for a time off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
