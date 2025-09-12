export * as customExtensionStageSettings from './customExtensionStageSettings';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies',
    'post'
  >;
  'PUT /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'put'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * In Microsoft Entra entitlement management, delete an accessPackageAssignmentPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/assignmentPolicies`
 *
 * Retrieve a list of accessPackageAssignmentPolicy objects in Microsoft Entra entitlement management. If the delegated user is in a directory role, the resulting list includes all the assignment policies that the caller has access to read, across all catalogs and access packages. If the delegated user is an access package manager or catalog owner, they should instead retrieve the policies for the access packages they can read with list accessPackages by including $expand&#x3D;assignmentPolicies as a query parameter.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignmentPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
  *
  * In Microsoft Entra entitlement management, retrieve the properties and relationships of an
 accessPackageAssignmentPolicy object.
  */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/assignmentPolicies`
 *
 * Create a new accessPackageAssignmentPolicy object in Microsoft Entra entitlement management. The request includes a reference to the accessPackage that contains this policy, which must already exist.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/assignmentPolicies']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/assignmentPolicies',
    body,
  };
}

/**
 * `PUT /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * Update an existing accessPackageAssignmentPolicy object to change one or more of its properties, such as the display name or description.
 */
export function set(
  body: IEndpoints['PUT /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['body'],
  params?: IEndpoints['PUT /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'put',
    path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage`
   *
   * Access package containing this policy. Read-only.  Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const catalog = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog`
   *
   * Catalog of the access package containing this policy. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const questions = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions`
   *
   * Questions that are posed to the  requestor.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
      paramDefs: {
        path: ['accessPackageAssignmentPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   * Questions that are posed to the  requestor.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        path: ['accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
    };
  },
};
