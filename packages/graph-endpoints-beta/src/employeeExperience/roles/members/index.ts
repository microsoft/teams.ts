export * as user from './user';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'delete'
  >;
  'GET /employeeExperience/roles/{engagementRole-id}/members': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members',
    'get'
  >;
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'get'
  >;
  'PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    'patch'
  >;
  'POST /employeeExperience/roles/{engagementRole-id}/members': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Delete a Viva Engage role from a user.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members`
 *
 * Get a list of users with assigned roles in Viva Engage.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}/members',
    paramDefs: {
      path: ['engagementRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Users that have this role assigned.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['engagementRole-id', 'engagementRoleMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}',
    paramDefs: {
      path: ['engagementRole-id', 'engagementRoleMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/roles/{engagementRole-id}/members`
 *
 * Create a new engagementRoleMember object that assigns a Viva Engage role to a user.
 */
export function create(
  body: IEndpoints['POST /employeeExperience/roles/{engagementRole-id}/members']['body'],
  params?: IEndpoints['POST /employeeExperience/roles/{engagementRole-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /employeeExperience/roles/{engagementRole-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/roles/{engagementRole-id}/members',
    paramDefs: {
      path: ['engagementRole-id'],
    },
    params,
    body,
  };
}
