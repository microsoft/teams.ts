import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/schedulingGroups`
 *
 * The logical grouping of users in the schedule (usually by role).
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
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
 * `GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 * The logical grouping of users in the schedule (usually by role).
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/schedulingGroups`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
