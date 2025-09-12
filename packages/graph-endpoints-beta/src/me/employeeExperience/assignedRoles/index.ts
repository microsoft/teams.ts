export * as members from './members';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    'delete'
  >;
  'GET /me/employeeExperience/assignedRoles': Operation<
    '/me/employeeExperience/assignedRoles',
    'get'
  >;
  'GET /me/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    'get'
  >;
  'PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    'patch'
  >;
  'POST /me/employeeExperience/assignedRoles': Operation<
    '/me/employeeExperience/assignedRoles',
    'post'
  >;
}

/**
 * `DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['engagementRole-id'],
    },
    params,
  };
}

/**
 * `GET /me/employeeExperience/assignedRoles`
 *
 * Get a list of all the roles assigned to a user in Viva Engage.
 */
export function list(
  params?: IEndpoints['GET /me/employeeExperience/assignedRoles']['parameters']
): EndpointRequest<IEndpoints['GET /me/employeeExperience/assignedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/assignedRoles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 * Represents the collection of Viva Engage roles assigned to a user.
 */
export function get(
  params?: IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      path: ['engagementRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}']['body'],
  params?: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      path: ['engagementRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/employeeExperience/assignedRoles`
 *
 */
export function create(
  body: IEndpoints['POST /me/employeeExperience/assignedRoles']['body']
): EndpointRequest<IEndpoints['POST /me/employeeExperience/assignedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/employeeExperience/assignedRoles',
    body,
  };
}
