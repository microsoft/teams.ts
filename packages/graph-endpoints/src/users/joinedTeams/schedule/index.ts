export * as dayNotes from './dayNotes';
export * as offerShiftRequests from './offerShiftRequests';
export * as openShiftChangeRequests from './openShiftChangeRequests';
export * as openShifts from './openShifts';
export * as schedulingGroups from './schedulingGroups';
export * as share from './share';
export * as shifts from './shifts';
export * as swapShiftsChangeRequests from './swapShiftsChangeRequests';
export * as timeCards from './timeCards';
export * as timeOffReasons from './timeOffReasons';
export * as timeOffRequests from './timeOffRequests';
export * as timesOff from './timesOff';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'get'
  >;
  'PUT /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'put',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
