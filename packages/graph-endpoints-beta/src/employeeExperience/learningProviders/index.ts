export * as learningContents from './learningContents';
export * as learningCourseActivities from './learningCourseActivities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'delete'
  >;
  'GET /employeeExperience/learningProviders': Operation<
    '/employeeExperience/learningProviders',
    'get'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'patch'
  >;
  'POST /employeeExperience/learningProviders': Operation<
    '/employeeExperience/learningProviders',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Delete a learningProvider resource and remove its registration in Viva Learning for the tenant.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'learningProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders`
 *
 * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/learningProviders']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/learningProviders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningProviders',
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
 * `GET /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Read the properties and relationships of a learningProvider object.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Update the properties of a learningProvider object.
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: [{ name: 'learningProvider-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/learningProviders`
 *
 * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
 */
export function create(
  body: IEndpoints['POST /employeeExperience/learningProviders']['body'],
  params?: IEndpoints['POST /employeeExperience/learningProviders']['parameters']
): EndpointRequest<IEndpoints['POST /employeeExperience/learningProviders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/learningProviders',
    paramDefs: [],
    params,
    body,
  };
}
