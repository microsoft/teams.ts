export * as user from './user';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members',
    'get'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members`
 *
 * Users that have this role assigned.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members',
    paramDefs: {
      path: ['user-id', 'engagementRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Users that have this role assigned.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members']['body'],
  params?: IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members',
    paramDefs: {
      path: ['user-id', 'engagementRole-id'],
    },
    params,
    body,
  };
}
