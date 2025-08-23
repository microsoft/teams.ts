import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timesOff`
 *
 * The instances of times off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timesOff',
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
 * `GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 * The instances of times off in the schedule.
 */
export function get$1(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timesOff`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timesOff',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
