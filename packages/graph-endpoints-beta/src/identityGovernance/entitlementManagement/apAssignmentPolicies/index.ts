export * as customExtensionHandlers from './customExtensionHandlers';
export * as customExtensionStageSettings from './customExtensionStageSettings';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies',
    'post'
  >;
  'PUT /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'put'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * In Microsoft Entra entitlement management, delete an accessPackageAssignmentPolicy.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies`
 *
 * Retrieve a list of accessPackageAssignmentPolicy objects in Microsoft Entra entitlement management. If the delegated user is in a directory role, the resulting list includes all the assignment policies that the caller has access to read, across all catalogs and access packages.  If the delegated user is an access package manager or catalog owner, they should instead retrieve the policies for the access packages they can read with list accessPackages by including $expand&#x3D;accessPackageAssignmentPolicies in the query.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
  *
  * In Microsoft Entra entitlement management, retrieve the properties and relationships of an
 accessPackageAssignmentPolicy object.
  * @deprecated
  */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies`
 *
 * Create a new accessPackageAssignmentPolicy object in Microsoft Entra entitlement management.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies',
    body,
  };
}

/**
 * `PUT /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * Update an existing accessPackageAssignmentPolicy object to change one or more of its properties, such as the display name or description.
 * @deprecated
 */
export function set(
  body: IEndpoints['PUT /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['body'],
  params?: IEndpoints['PUT /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage`
   *
   * The access package with this policy. Read-only. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const accessPackageCatalog = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackageCatalog',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};
