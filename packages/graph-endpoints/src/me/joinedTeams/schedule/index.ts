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
  'DELETE /me/joinedTeams/{team-id}/schedule': Operation<
    '/me/joinedTeams/{team-id}/schedule',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule': Operation<'/me/joinedTeams/{team-id}/schedule', 'get'>;
  'PUT /me/joinedTeams/{team-id}/schedule': Operation<'/me/joinedTeams/{team-id}/schedule', 'put'>;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /me/joinedTeams/{team-id}/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'put',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
