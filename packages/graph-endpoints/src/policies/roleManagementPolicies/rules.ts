import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
    'get'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'patch'
  >;
  'POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
    'post'
  >;
}

/**
 * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
      { name: 'unifiedRoleManagementPolicyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules`
 *
 * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:
 */
export function list(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
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
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
 *
 * Retrieve a rule or settings defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object:
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
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
 * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
 *
 * Update a rule defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object: For more information about rules for Microsoft Entra roles and examples of updating rules, see the following articles:
 */
export function update(
  body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['body'],
  params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    paramDefs: [
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
      { name: 'unifiedRoleManagementPolicyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['body'],
  params?: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['response']
> {
  return {
    method: 'post',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
    paramDefs: [{ name: 'unifiedRoleManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}
