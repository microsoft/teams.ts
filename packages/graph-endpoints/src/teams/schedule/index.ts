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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'delete'>;
  'GET /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'get'>;
  'PUT /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'put'>;
}

/**
 * `DELETE /teams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/schedule']['response']> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /teams/{team-id}/schedule`
  *
  * Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
  */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PUT /teams/{team-id}/schedule`
  *
  * Create or replace a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation replaces the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
  */
export function set(
  body: IEndpoints['PUT /teams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /teams/{team-id}/schedule']['response']> {
  return {
    method: 'put',
    path: '/teams/{team-id}/schedule',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
