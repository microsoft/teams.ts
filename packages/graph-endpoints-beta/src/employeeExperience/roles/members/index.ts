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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members`
 *
 * Get a list of the engagementRoleMember objects and their properties.
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}`
 *
 * Users who have been assigned this role.
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/roles/{engagementRole-id}/members`
 *
 * Assign a Viva Engage role to a user.
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
    paramDefs: [{ name: 'engagementRole-id', in: 'path' }],
    params,
    body,
  };
}
