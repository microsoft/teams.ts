export * as createdByUser from './createdByUser';
export * as documentSetVersions from './documentSetVersions';
export * as driveItem from './driveItem';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items': Operation<'/drives/{drive-id}/list/items', 'get'>;
  'GET /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items': Operation<'/drives/{drive-id}/list/items', 'post'>;
  'GET /drives/{drive-id}/list/items/{listItem-id}/analytics': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/analytics',
    'get'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/createLink': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/createLink',
    'post'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/fields',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/fields',
    'patch'
  >;
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/fields',
    'delete'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'listItem-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items`
 *
 * All items contained in the list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/items']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}`
 *
 * All items contained in the list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/items']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const analytics = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/analytics`
   *
   * Analytics about the view activities that took place on this item.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/analytics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/analytics']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/analytics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'listItem-id'],
      },
      params,
    };
  },
};

export const createLink = {
  /**
   * `POST /drives/{drive-id}/list/items/{listItem-id}/createLink`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/list/items/{listItem-id}/createLink',
      paramDefs: {
        path: ['drive-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const fields = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/fields`
   *
   * The values of the columns set on this list item.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/items/{listItem-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/fields']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        path: ['drive-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/items/{listItem-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'listItem-id'],
      },
      params,
    };
  },
};
