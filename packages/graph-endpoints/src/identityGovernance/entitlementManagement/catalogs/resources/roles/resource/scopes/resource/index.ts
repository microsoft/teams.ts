import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/environment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageCatalog-id',
          'accessPackageResource-id',
          'accessPackageResourceRole-id',
          'accessPackageResourceScope-id',
        ],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resources/{accessPackageResource-id}/roles/{accessPackageResourceRole-id}/resource/scopes/{accessPackageResourceScope-id}/resource/refresh',
      paramDefs: {
        path: [
          'accessPackageCatalog-id',
          'accessPackageResource-id',
          'accessPackageResourceRole-id',
          'accessPackageResourceScope-id',
        ],
      },
      params,
    };
  },
};
