export * as catalog from './catalog';
export * as deploymentAudiences from './deploymentAudiences';
export * as deployments from './deployments';
export * as products from './products';
export * as updatePolicies from './updatePolicies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates': Operation<'/admin/windows/updates', 'delete'>;
  'GET /admin/windows/updates': Operation<'/admin/windows/updates', 'get'>;
  'PATCH /admin/windows/updates': Operation<'/admin/windows/updates', 'patch'>;
  'GET /admin/windows/updates/resourceConnections': Operation<
    '/admin/windows/updates/resourceConnections',
    'get'
  >;
  'POST /admin/windows/updates/resourceConnections': Operation<
    '/admin/windows/updates/resourceConnections',
    'post'
  >;
  'GET /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'delete'
  >;
  'GET /admin/windows/updates/updatableAssets': Operation<
    '/admin/windows/updates/updatableAssets',
    'get'
  >;
  'POST /admin/windows/updates/updatableAssets': Operation<
    '/admin/windows/updates/updatableAssets',
    'post'
  >;
  'GET /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates`
 *
 * Entity that acts as a container for all Windows Update for Business deployment service functionalities. Read-only.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates']['body']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates',
    body,
  };
}

export const resourceConnections = {
  /**
   * `GET /admin/windows/updates/resourceConnections`
   *
   * Get a list of the resourceConnection objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/resourceConnections']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/windows/updates/resourceConnections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/resourceConnections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/resourceConnections`
   *
   * Create a new operationalInsightsConnection object.
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/resourceConnections']['body']
  ): EndpointRequest<IEndpoints['POST /admin/windows/updates/resourceConnections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/resourceConnections',
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/resourceConnections/{resourceConnection-id}`
   *
   * Read the properties and relationships of an operationalInsightsConnection object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['resourceConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
      paramDefs: {
        path: ['resourceConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}`
   *
   * Delete an operationalInsightsConnection object.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['resourceConnection-id'],
      },
      params,
    };
  },
};

export const updatableAssets = {
  /**
   * `GET /admin/windows/updates/updatableAssets`
   *
   * Get a list of updatableAsset objects and their properties. Listing updatable assets returns updatableAsset resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/updatableAssets']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/windows/updates/updatableAssets']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/updatableAssets',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/updatableAssets`
   *
   * Create a new updatableAssetGroup object. The updatableAssetGroup resource inherits from updatableAsset.
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/updatableAssets']['body']
  ): EndpointRequest<IEndpoints['POST /admin/windows/updates/updatableAssets']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/updatableAssets',
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/updatableAssets/{updatableAsset-id}`
   *
   * Read the properties of an azureADDevice object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['updatableAsset-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
      paramDefs: {
        path: ['updatableAsset-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}`
   *
   * Delete an azureADDevice object. When a Microsoft Entra device is deleted, it is unregistered and automatically unenrolled from management for all update categories, as well as removed from every deploymentAudience and updatableAssetGroup.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['updatableAsset-id'],
      },
      params,
    };
  },
};
