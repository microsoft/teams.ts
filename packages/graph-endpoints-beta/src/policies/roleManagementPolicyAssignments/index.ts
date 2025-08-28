export * as policy from './policy';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}': Operation<
    '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicyAssignments': Operation<
    '/policies/roleManagementPolicyAssignments',
    'get'
  >;
  'GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}': Operation<
    '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}': Operation<
    '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    'patch'
  >;
  'POST /policies/roleManagementPolicyAssignments': Operation<
    '/policies/roleManagementPolicyAssignments',
    'post'
  >;
}

/**
 * `DELETE /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleManagementPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicyAssignments`
 *
 * Get the details of all role management policy assignments made in PIM for Microsoft Entra roles and PIM for Groups.
 */
export function list(
  params?: IEndpoints['GET /policies/roleManagementPolicyAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /policies/roleManagementPolicyAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/roleManagementPolicyAssignments',
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
 * `GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}`
 *
 * Represents the role management policy assignments.
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleManagementPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleManagementPolicyAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicyAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicyAssignments']['body'],
  params?: IEndpoints['POST /policies/roleManagementPolicyAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /policies/roleManagementPolicyAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/roleManagementPolicyAssignments',
    paramDefs: [],
    params,
    body,
  };
}
