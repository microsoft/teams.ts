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
  'GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy': Operation<
    '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleManagementPolicyAssignment-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['unifiedRoleManagementPolicyAssignment-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['unifiedRoleManagementPolicyAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicyAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicyAssignments']['body']
): EndpointRequest<IEndpoints['POST /policies/roleManagementPolicyAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/roleManagementPolicyAssignments',
    body,
  };
}

export const policy = {
  /**
   * `GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy`
   *
   * The policy that&#x27;s associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy.
   */
  get: function get(
    params?: IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementPolicyAssignment-id'],
      },
      params,
    };
  },
};
