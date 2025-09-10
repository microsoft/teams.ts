export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
