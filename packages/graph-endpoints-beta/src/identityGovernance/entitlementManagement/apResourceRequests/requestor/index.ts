import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
    },
    params,
    body,
  };
}

export const connectedOrganization = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization`
   *
   * The connected organization of the subject. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/requestor/connectedOrganization',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRequest-id'],
      },
      params,
    };
  },
};
