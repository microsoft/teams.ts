import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
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
 * `GET /users/{user-id}/employeeExperience/learningCourseActivities`
 *
 * Get a list of the learningCourseActivity objects (assigned or self-initiated) for a user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/employeeExperience/learningCourseActivities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
 *
 * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}
