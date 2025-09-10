export * as resourceRoles from './resourceRoles';
export * as resourceScopes from './resourceScopes';
export * as resources from './resources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog',
    paramDefs: {
      path: ['accessPackageResourceRequest-id'],
    },
    params,
    body,
  };
}

export const accessPackages = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages`
   *
   * The access packages in this catalog. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceRequest-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}`
   *
   * The access packages in this catalog. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/accessPackages/{accessPackage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRequest-id', 'accessPackage-id'],
      },
      params,
    };
  },
};

export const customWorkflowExtensions = {
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions',
      paramDefs: {
        path: ['accessPackageResourceRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRequest-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        path: ['accessPackageResourceRequest-id', 'customCalloutExtension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageResourceRequest-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
};
