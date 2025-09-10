export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
