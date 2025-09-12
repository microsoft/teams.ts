export * as assignmentPolicies from './assignmentPolicies';
export * as incompatibleGroups from './incompatibleGroups';
export * as resourceRoleScopes from './resourceRoleScopes';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages': Operation<
    '/identityGovernance/entitlementManagement/accessPackages',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages': Operation<
    '/identityGovernance/entitlementManagement/accessPackages',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}`
 *
 * Delete an accessPackage object. You cannot delete an access package if it has any accessPackageAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages`
 *
 * Retrieve a list of accessPackage objects.  The resulting list includes all the access packages that the caller has access to read, across all catalogs.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}`
 *
 * Retrieve the properties and relationships of an accessPackage object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    paramDefs: {
      path: ['accessPackage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}`
 *
 * Update an existing accessPackage object to change one or more of its properties, such as the display name or description.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}',
    paramDefs: {
      path: ['accessPackage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackages`
 *
 * Create a new accessPackage object. The access package will be added to an existing accessPackageCatalog.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackages',
    body,
  };
}

export const accessPackagesIncompatibleWith = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith`
   *
   * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackage-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}`
   *
   * The access packages that are incompatible with this package. Read-only.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackagesIncompatibleWith/{accessPackage-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackage-id1'],
      },
      params,
    };
  },
};

export const catalog = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog`
   *
   * Required when creating the access package. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/catalog',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id'],
      },
      params,
    };
  },
};

export const getApplicablePolicyRequirements = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements`
   *
   * In Microsoft Entra entitlement management, this action retrieves a list of accessPackageAssignmentRequestRequirements objects that the currently signed-in user can use to create an accessPackageAssignmentRequest.  Each requirement object corresponds to an access package assignment policy that the currently signed-in user is allowed to request an assignment for.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/getApplicablePolicyRequirements',
      paramDefs: {
        path: ['accessPackage-id'],
      },
      params,
    };
  },
};

export const incompatibleAccessPackages = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages`
   *
   * Retrieve a list of the accessPackage objects that have been marked as incompatible on an accessPackage.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleAccessPackages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackage-id'],
      },
      params,
    };
  },
};
