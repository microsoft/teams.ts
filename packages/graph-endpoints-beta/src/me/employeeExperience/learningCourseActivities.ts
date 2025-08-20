import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
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
 * `GET /me/employeeExperience/learningCourseActivities`
 *
 */
export function list(
  params?: IEndpoints['GET /me/employeeExperience/learningCourseActivities']['parameters']
): EndpointRequest<IEndpoints['GET /me/employeeExperience/learningCourseActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/learningCourseActivities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}
