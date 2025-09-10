export * as scopes from './scopes';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/environment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/refresh',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
};

export const roles = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles`
   *
   * Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}`
   *
   * Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role/resource/roles/{accessPackageResourceRole-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
};
