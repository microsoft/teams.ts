export * as accessPackageResourceRole from './apResourceRole';
export * as accessPackageResourceScope from './apResourceScope';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes',
    paramDefs: {
      path: ['accessPackage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes`
 *
 * Create a new accessPackageResourceRoleScope for adding a resource role to an access package. The access package resource, for a group, an app, or a SharePoint Online site, must already exist in the access package catalog, and the originId for the resource role retrieved from the list of the resource roles. Once you add the resource role scope to the access package, the user will receive this resource role through any current and future access package assignments.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes',
    paramDefs: {
      path: ['accessPackage-id'],
    },
    params,
    body,
  };
}
