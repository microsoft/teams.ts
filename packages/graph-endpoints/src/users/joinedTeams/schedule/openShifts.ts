import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
