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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members`
 *
 * Users who have been assigned this role.
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
      { name: 'engagementRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Users who have been assigned this role.
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'engagementRole-id', in: 'path' },
    ],
    params,
    body,
  };
}
