export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackage-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackage-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackage-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
