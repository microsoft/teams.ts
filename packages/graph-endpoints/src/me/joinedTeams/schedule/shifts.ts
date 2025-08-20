import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/shifts`
 *
 * The shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/shifts',
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
 * `GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
 *
 * The shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/shifts`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/shifts',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
