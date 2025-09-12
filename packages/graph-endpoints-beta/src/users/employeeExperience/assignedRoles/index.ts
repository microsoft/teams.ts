export * as members from './members';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    'delete'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles',
    'get'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    'get'
  >;
  'PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    'patch'
  >;
  'POST /users/{user-id}/employeeExperience/assignedRoles': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'engagementRole-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles`
 *
 * Get a list of all the roles assigned to a user in Viva Engage.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 * Represents the collection of Viva Engage roles assigned to a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      path: ['user-id', 'engagementRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}',
    paramDefs: {
      path: ['user-id', 'engagementRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/employeeExperience/assignedRoles`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles']['body'],
  params?: IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/employeeExperience/assignedRoles',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}
