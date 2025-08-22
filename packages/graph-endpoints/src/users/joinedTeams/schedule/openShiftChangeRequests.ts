import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
 *
 * The open shift requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 * The open shift requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
