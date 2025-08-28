export * as dayNotes from './dayNotes';
export * as offerShiftRequests from './offerShiftRequests';
export * as openShiftChangeRequests from './openShiftChangeRequests';
export * as openShifts from './openShifts';
export * as schedulingGroups from './schedulingGroups';
export * as share from './share';
export * as shifts from './shifts';
export * as shiftsRoleDefinitions from './shiftsRoleDefinitions';
export * as swapShiftsChangeRequests from './swapShiftsChangeRequests';
export * as timeCards from './timeCards';
export * as timeOffReasons from './timeOffReasons';
export * as timeOffRequests from './timeOffRequests';
export * as timesOff from './timesOff';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule': Operation<
    '/groups/{group-id}/team/schedule',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule': Operation<'/groups/{group-id}/team/schedule', 'get'>;
  'PUT /groups/{group-id}/team/schedule': Operation<'/groups/{group-id}/team/schedule', 'put'>;
}

/**
 * `DELETE /groups/{group-id}/team/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team/schedule']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
