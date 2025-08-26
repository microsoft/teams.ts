import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'delete'
  >;
  'GET /employeeExperience/learningCourseActivities': Operation<
    '/employeeExperience/learningCourseActivities',
    'get'
  >;
  'GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'patch'
  >;
  'POST /employeeExperience/learningCourseActivities': Operation<
    '/employeeExperience/learningCourseActivities',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningCourseActivities`
 *
 * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/learningCourseActivities']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/learningCourseActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningCourseActivities',
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
 * `GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
 *
 * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [{ name: 'learningCourseActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/learningCourseActivities`
 *
 */
export function create(
  body: IEndpoints['POST /employeeExperience/learningCourseActivities']['body'],
  params?: IEndpoints['POST /employeeExperience/learningCourseActivities']['parameters']
): EndpointRequest<IEndpoints['POST /employeeExperience/learningCourseActivities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/learningCourseActivities',
    paramDefs: [],
    params,
    body,
  };
}
