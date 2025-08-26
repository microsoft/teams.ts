import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    'get'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'patch'
  >;
  'POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    'post'
  >;
}

/**
 * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
      { name: 'unifiedRoleManagementPolicyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules`
 *
 * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
 *
 * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
      { name: 'unifiedRoleManagementPolicyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['body'],
  params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    paramDefs: [
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
      { name: 'unifiedRoleManagementPolicyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['body'],
  params?: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['response']
> {
  return {
    method: 'post',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    paramDefs: [{ name: 'unifiedRoleManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}
