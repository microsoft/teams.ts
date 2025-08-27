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
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    'get'
  >;
  'PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    'put'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['body'],
  params?: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
