export * as learningCourseActivities from './learningCourseActivities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/employeeExperience': Operation<
    '/users/{user-id}/employeeExperience',
    'delete'
  >;
  'GET /users/{user-id}/employeeExperience': Operation<
    '/users/{user-id}/employeeExperience',
    'get'
  >;
  'PATCH /users/{user-id}/employeeExperience': Operation<
    '/users/{user-id}/employeeExperience',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/employeeExperience`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/employeeExperience']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/employeeExperience']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/employeeExperience`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/employeeExperience']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/employeeExperience']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/employeeExperience']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
