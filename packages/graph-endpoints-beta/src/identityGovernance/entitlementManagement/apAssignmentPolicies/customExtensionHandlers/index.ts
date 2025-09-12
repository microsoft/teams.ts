import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentPolicy-id', 'customExtensionHandler-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers`
 *
 * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id', 'customExtensionHandler-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id', 'customExtensionHandler-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    paramDefs: {
      path: ['accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

export const customExtension = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension`
   *
   * Indicates which custom workflow extension is executed at this stage. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentPolicy-id', 'customExtensionHandler-id'],
      },
      params,
    };
  },
};
