import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}': Operation<
    '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/subjects': Operation<
    '/identityGovernance/entitlementManagement/subjects',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}': Operation<
    '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}': Operation<
    '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/subjects': Operation<
    '/identityGovernance/entitlementManagement/subjects',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization': Operation<
    '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageSubject-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/subjects`
 *
 * Get the properties of an existing accessPackageSubject object.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/subjects']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/subjects']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/subjects',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}`
 *
 * Represents the subjects within entitlement management.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    paramDefs: {
      path: ['accessPackageSubject-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}`
 *
 * Update an existing accessPackageSubject object to change the subject lifecycle.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}',
    paramDefs: {
      path: ['accessPackageSubject-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/subjects`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/subjects']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/subjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/subjects',
    body,
  };
}

export const connectedOrganization = {
  /**
   * `GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization`
   *
   * The connected organization of the subject. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/subjects/{accessPackageSubject-id}/connectedOrganization',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageSubject-id'],
      },
      params,
    };
  },
};
