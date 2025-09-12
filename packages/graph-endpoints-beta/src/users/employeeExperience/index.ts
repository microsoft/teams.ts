export * as assignedRoles from './assignedRoles';

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
  'GET /users/{user-id}/employeeExperience/learningCourseActivities': Operation<
    '/users/{user-id}/employeeExperience/learningCourseActivities',
    'get'
  >;
  'GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'get'
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
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/employeeExperience',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const learningCourseActivities = {
  /**
   * `GET /users/{user-id}/employeeExperience/learningCourseActivities`
   *
   * Get a list of the learningCourseActivity objects (assigned or self-initiated) for a user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/employeeExperience/learningCourseActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'learningCourseActivity-id'],
      },
      params,
    };
  },
};
