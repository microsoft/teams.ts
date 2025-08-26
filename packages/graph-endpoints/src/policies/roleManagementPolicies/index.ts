export * as effectiveRules from './effectiveRules';
export * as rules from './rules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicies': Operation<'/policies/roleManagementPolicies', 'get'>;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/roleManagementPolicies': Operation<'/policies/roleManagementPolicies', 'post'>;
}

/**
 * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies`
 *
 * Get the details of the policies in PIM that can be applied to Microsoft Entra roles or group membership or ownership. To retrieve policies that apply to Azure RBAC, use the Azure REST PIM API for role management policies.
 */
export function list(
  params?: IEndpoints['GET /policies/roleManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/roleManagementPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies',
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
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 * Retrieve the details of a role management policy.
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: [{ name: 'unifiedRoleManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicies']['body'],
  params?: IEndpoints['POST /policies/roleManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/roleManagementPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/roleManagementPolicies',
    paramDefs: [],
    params,
    body,
  };
}
