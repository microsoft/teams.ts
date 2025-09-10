export * as requestor from './requestor';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRequests': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResourceRequests': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceRequests`
 *
 * Retrieve a list of accessPackageResourceRequest objects.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}`
 *
 * Represents a request to add or remove a resource to or from a catalog respectively.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageResourceRequests`
 *
 * Create a new accessPackageResourceRequest object to request the addition of a resource to an access package catalog, update of a resource, or the removal of a resource from a catalog.  A resource must be included in an access package catalog before a role of that resource can be added to an access package.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRequests']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests',
    body,
  };
}

export const accessPackageResource = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource`
   *
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest-id}/accessPackageResource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRequest-id'],
      },
      params,
    };
  },
};
