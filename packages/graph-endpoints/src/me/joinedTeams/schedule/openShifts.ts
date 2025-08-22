import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/openShifts`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/openShifts',
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
 * `GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/openShifts`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/openShifts',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
