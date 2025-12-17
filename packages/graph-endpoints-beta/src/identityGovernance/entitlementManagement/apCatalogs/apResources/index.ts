export * as accessPackageResourceRoles from './apResourceRoles';
export * as accessPackageResourceScopes from './apResourceScopes';
export * as uploadSessions from './uploadSessions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageCatalog-id', 'accessPackageResource-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources`
 *
 * Retrieve a list of accessPackageResource objects in an accessPackageCatalog.  To request to add or remove an accessPackageResource, use create accessPackageResourceRequest.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
    },
    params,
    body,
  };
}

export const accessPackageResourceEnvironment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment`
   *
   * Contains the environment information for the resource. This environment can be set using either the @odata.bind annotation or the environment&#x27;s originId. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'accessPackageResource-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh`
   *
   * In Microsoft Entra entitlement management, refresh the accessPackageResource object to fetch the latest details for displayName, description, and resourceType from the origin system. For the AadApplication originSystem, this operation also updates the displayName and description for the accessPackageResourceRole.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/refresh',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'accessPackageResource-id'],
      },
      params,
    };
  },
};
