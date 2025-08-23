import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
 *
 * The open shift requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
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
 * `GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 * The open shift requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
