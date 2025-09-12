import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor`
 *
 * The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
    },
    params,
    body,
  };
}

export const connectedOrganization = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization`
   *
   * The connected organization of the subject. Read-only. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/requestor/connectedOrganization',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};
