export * as applicableContent from './applicableContent';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences': Operation<
    '/admin/windows/updates/deploymentAudiences',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'patch'
  >;
  'POST /admin/windows/updates/deploymentAudiences': Operation<
    '/admin/windows/updates/deploymentAudiences',
    'post'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
    'get'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
    'post'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members',
    'get'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members',
    'post'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 * Delete a deploymentAudience object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deploymentAudience-id'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences`
 *
 * Get a list of deploymentAudience objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/deploymentAudiences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 * Read the properties and relationships of a deploymentAudience object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: {
      path: ['deploymentAudience-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: {
      path: ['deploymentAudience-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deploymentAudiences`
 *
 * Create a new deploymentAudience object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deploymentAudiences']['body']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/deploymentAudiences']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deploymentAudiences',
    body,
  };
}

export const exclusions = {
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions`
   *
   * List the updatableAsset resources that are excluded from a deploymentAudience.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deploymentAudience-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
      paramDefs: {
        path: ['deploymentAudience-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
   *
   * Specifies the assets to exclude from the audience.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
      paramDefs: {
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
    };
  },
};

export const members = {
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members`
   *
   * List the updatableAsset resources that are members of a deploymentAudience.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deploymentAudience-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members',
      paramDefs: {
        path: ['deploymentAudience-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}`
   *
   * Specifies the assets to include in the audience.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
      paramDefs: {
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deploymentAudience-id', 'updatableAsset-id'],
      },
      params,
    };
  },
};
