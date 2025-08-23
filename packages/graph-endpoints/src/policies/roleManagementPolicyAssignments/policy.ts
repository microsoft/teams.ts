import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy': Operation<
    '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy',
    'get'
  >;
}

/**
 * `GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy`
 *
 * The policy that&#x27;s associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy.
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleManagementPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}
