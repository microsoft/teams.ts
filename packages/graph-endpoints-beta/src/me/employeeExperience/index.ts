export * as assignedRoles from './assignedRoles';
export * as learningCourseActivities from './learningCourseActivities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/employeeExperience': Operation<'/me/employeeExperience', 'delete'>;
  'GET /me/employeeExperience': Operation<'/me/employeeExperience', 'get'>;
  'PATCH /me/employeeExperience': Operation<'/me/employeeExperience', 'patch'>;
}

/**
 * `DELETE /me/employeeExperience`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/employeeExperience',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/employeeExperience`
 *
 */
export function get(
  params?: IEndpoints['GET /me/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['GET /me/employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/employeeExperience`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/employeeExperience']['body'],
  params?: IEndpoints['PATCH /me/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/employeeExperience',
    paramDefs: [],
    params,
    body,
  };
}
