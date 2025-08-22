import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'delete'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    'get'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'patch'
  >;
  'POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
 *
 * Delete a learningCourseActivity object using the course activity ID of either an assignment or a self-initiated activity.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
 *
 * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
> {
  return {
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
 *
 * Update the properties of a learningCourseActivity object.
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    paramDefs: [
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningCourseActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
  * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
  *
  * Create a new learningCourseActivity object. A learning course activity can be one of two types: 
- Assignment
- Self-initiated Use this method to create either type of activity.
  */
export function create(
  body: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['body'],
  params?: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters']
): EndpointRequest<
  IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
> {
  return {
    method: 'post',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    paramDefs: [{ name: 'learningProvider-id', in: 'path' }],
    params,
    body,
  };
}
