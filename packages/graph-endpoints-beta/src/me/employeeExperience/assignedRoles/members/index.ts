export * as user from './user';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'delete'
  >;
  'GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members',
    'get'
  >;
  'GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'get'
  >;
  'PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'patch'
  >;
  'POST /me/employeeExperience/assignedRoles/{engagementRole-id}/members': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members',
    'post'
  >;
}

/**
 * `DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
  };
}

/**
 * `GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members`
 *
 * Users that have this role assigned.
 */
export function list(
  params?: IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members',
    paramDefs: {
      path: ['engagementRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Users that have this role assigned.
 */
export function get(
  params?: IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['engagementRole-id', 'engagementRoleMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['body'],
  params?: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/employeeExperience/assignedRoles/{engagementRole-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /me/employeeExperience/assignedRoles/{engagementRole-id}/members']['body'],
  params?: IEndpoints['POST /me/employeeExperience/assignedRoles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/employeeExperience/assignedRoles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members',
    paramDefs: {
      path: ['engagementRole-id'],
    },
    params,
    body,
  };
}
