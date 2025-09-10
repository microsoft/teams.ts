export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
