import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target`
 *
 * The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
    },
    params,
    body,
  };
}

export const connectedOrganization = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization`
   *
   * The connected organization of the subject. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/target/connectedOrganization',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id'],
      },
      params,
    };
  },
};
