export * as scopes from './scopes';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
    },
    params,
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/environment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/refresh',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
};

export const roles = {
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles`
   *
   * Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'accessPackageResourceRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}`
   *
   * Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageCatalog-id',
          'accessPackageResourceRole-id',
          'accessPackageResourceRole-id1',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
      paramDefs: {
        path: [
          'accessPackageCatalog-id',
          'accessPackageResourceRole-id',
          'accessPackageResourceRole-id1',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/resourceRoles/{accessPackageResourceRole-id}/resource/roles/{accessPackageResourceRole-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessPackageCatalog-id',
          'accessPackageResourceRole-id',
          'accessPackageResourceRole-id1',
        ],
      },
      params,
    };
  },
};
