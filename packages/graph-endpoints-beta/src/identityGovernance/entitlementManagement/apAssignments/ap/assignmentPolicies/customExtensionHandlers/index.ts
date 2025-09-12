import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageAssignment-id',
        'accessPackageAssignmentPolicy-id',
        'customExtensionHandler-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers`
 *
 * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentPolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      path: [
        'accessPackageAssignment-id',
        'accessPackageAssignmentPolicy-id',
        'customExtensionHandler-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}',
    paramDefs: {
      path: [
        'accessPackageAssignment-id',
        'accessPackageAssignmentPolicy-id',
        'customExtensionHandler-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentPolicy-id'],
    },
    params,
    body,
  };
}

export const customExtension = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension`
   *
   * Indicates which custom workflow extension is executed at this stage. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageAssignmentPolicies/{accessPackageAssignmentPolicy-id}/customExtensionHandlers/{customExtensionHandler-id}/customExtension',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageAssignment-id',
          'accessPackageAssignmentPolicy-id',
          'customExtensionHandler-id',
        ],
      },
      params,
    };
  },
};
