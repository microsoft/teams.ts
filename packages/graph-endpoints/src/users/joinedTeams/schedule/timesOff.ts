import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff`
 *
 * The instances of times off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 * The instances of times off in the schedule.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
