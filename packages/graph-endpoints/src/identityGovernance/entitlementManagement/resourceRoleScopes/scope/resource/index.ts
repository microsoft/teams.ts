export * as roles from './roles';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/environment',
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
   * `POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/refresh',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
};

export const scopes = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes`
   *
   * Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}`
   *
   * Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceScope-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/scopes/{accessPackageResourceScope-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceScope-id'],
      },
      params,
    };
  },
};
