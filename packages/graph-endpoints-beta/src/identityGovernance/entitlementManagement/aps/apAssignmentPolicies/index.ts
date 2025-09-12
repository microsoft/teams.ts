export * as customExtensionHandlers from './customExtensionHandlers';
export * as customExtensionStageSettings from './customExtensionStageSettings';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies`
 *
 * Read-only. Nullable. Supports $expand.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies',
    paramDefs: {
      path: ['accessPackage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * Read-only. Nullable. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies',
    paramDefs: {
      path: ['accessPackage-id'],
    },
    params,
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage`
   *
   * The access package with this policy. Read-only. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const accessPackageCatalog = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};
