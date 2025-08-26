export * as roleDefinition from './roleDefinition';
export * as roleScopeTags from './roleScopeTags';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/roleAssignments': Operation<'/deviceManagement/roleAssignments', 'get'>;
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/roleAssignments': Operation<'/deviceManagement/roleAssignments', 'post'>;
}

/**
 * `DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleAssignments`
 *
 * The Role Assignments.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleAssignments',
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
 * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 * The Role Assignments.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [{ name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
