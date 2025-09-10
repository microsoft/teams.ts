export * as applicableContent from './applicableContent';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'delete'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'patch'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions',
    'get'
  >;
  'POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions',
    'post'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/members': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/members',
    'get'
  >;
  'POST /admin/windows/updates/deployments/{deployment-id}/audience/members': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/members',
    'post'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: {
      header: ['If-Match'],
      path: ['deployment-id'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 * Specifies the audience to which content is deployed.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: {
      path: ['deployment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: {
      path: ['deployment-id'],
    },
    params,
    body,
  };
}

export const exclusions = {
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions`
   *
   * Specifies the assets to exclude from the audience.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deployment-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions',
      paramDefs: {
        path: ['deployment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}`
   *
   * Specifies the assets to exclude from the audience.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
      paramDefs: {
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
    };
  },
};

export const members = {
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/members`
   *
   * Specifies the assets to include in the audience.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deployment-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deployments/{deployment-id}/audience/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/members']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/members',
      paramDefs: {
        path: ['deployment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}`
   *
   * Specifies the assets to include in the audience.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
      paramDefs: {
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deployment-id', 'updatableAsset-id'],
      },
      params,
    };
  },
};
