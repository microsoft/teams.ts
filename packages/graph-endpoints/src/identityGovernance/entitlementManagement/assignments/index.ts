import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/assignments': Operation<
    '/identityGovernance/entitlementManagement/assignments',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/assignments': Operation<
    '/identityGovernance/entitlementManagement/assignments',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target': Operation<
    '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/assignments`
 *
 * In Microsoft Entra entitlement management, retrieve a list of accessPackageAssignment objects. For directory-wide administrators, the resulting list includes all the assignments, current and well as expired, that the caller has access to read, across all catalogs and access packages.  If the caller is on behalf of a delegated user who is assigned only to catalog-specific delegated administrative roles, the request must supply a filter to indicate a specific access package, such as: $filter&#x3D;accessPackage/id eq &#x27;a914b616-e04e-476b-aa37-91038f0b165b&#x27;.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignments']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}`
 *
 * In Microsoft Entra entitlement management, retrieve the properties and relationships of an accessPackageAssignment object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/assignments']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/assignments']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/assignments',
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage`
   *
   * Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id'],
      },
      params,
    };
  },
};

export const assignmentPolicy = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy`
   *
   * Read-only. Supports $filter (eq) on the id property and $expand query parameters.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/assignmentPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id'],
      },
      params,
    };
  },
};

export const reprocess = {
  /**
   * `POST /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess`
   *
   * In Microsoft Entra entitlement management, callers can automatically reevaluate and enforce an accessPackageAssignment object of a user’s assignments for a specific access package. The state of the access package assignment must be Delivered for the administrator to reprocess the user&#x27;s assignment. Only admins with the Access Package Assignment Manager role, or higher, in Microsoft Entra entitlement management can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/reprocess',
      paramDefs: {
        path: ['accessPackageAssignment-id'],
      },
      params,
    };
  },
};

export const target = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target`
   *
   * The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignments/{accessPackageAssignment-id}/target',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id'],
      },
      params,
    };
  },
};
