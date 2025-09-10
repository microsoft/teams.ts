export * as customExtensionStageSettings from './customExtensionStageSettings';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies',
    paramDefs: {
      path: ['accessPackage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies',
    paramDefs: {
      path: ['accessPackage-id'],
    },
    params,
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage`
   *
   * Access package containing this policy. Read-only.  Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const catalog = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog`
   *
   * Catalog of the access package containing this policy. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/catalog',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
};

export const questions = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions`
   *
   * Questions that are posed to the  requestor.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions',
      paramDefs: {
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   * Questions that are posed to the  requestor.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/assignmentPolicies/{accessPackageAssignmentPolicy-id}/questions/{accessPackageQuestion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackage-id', 'accessPackageAssignmentPolicy-id', 'accessPackageQuestion-id'],
      },
      params,
    };
  },
};
