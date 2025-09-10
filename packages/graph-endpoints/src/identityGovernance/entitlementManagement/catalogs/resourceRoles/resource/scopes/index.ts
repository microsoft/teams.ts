export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageCatalog-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/scopes',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
    },
    params,
    body,
  };
}
