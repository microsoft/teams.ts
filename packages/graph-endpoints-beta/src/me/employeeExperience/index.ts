export * as assignedRoles from './assignedRoles';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/employeeExperience': Operation<'/me/employeeExperience', 'delete'>;
  'GET /me/employeeExperience': Operation<'/me/employeeExperience', 'get'>;
  'PATCH /me/employeeExperience': Operation<'/me/employeeExperience', 'patch'>;
  'GET /me/employeeExperience/learningCourseActivities': Operation<
    '/me/employeeExperience/learningCourseActivities',
    'get'
  >;
  'GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/employeeExperience`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/employeeExperience']['body']
): EndpointRequest<IEndpoints['PATCH /me/employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/employeeExperience',
    body,
  };
}

export const learningCourseActivities = {
  /**
   * `GET /me/employeeExperience/learningCourseActivities`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/employeeExperience/learningCourseActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/employeeExperience/learningCourseActivities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/employeeExperience/learningCourseActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['learningCourseActivity-id'],
      },
      params,
    };
  },
};
