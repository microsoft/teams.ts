export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles`
 *
 * Retrieve a list of accessPackageResourceRole objects of an accessPackageResource in an accessPackageCatalog. The resource should have been added to the catalog by creating an accessPackageResourceRequest. This list of roles can then be used by the caller to select a role, which is needed when subsequently creating an accessPackageResourceRoleScope.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
    },
    params,
    body,
  };
}
