export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'delete'>;
  'GET /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'get'>;
  'PATCH /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'patch'>;
  'GET /drives/{drive-id}/list/drive': Operation<'/drives/{drive-id}/list/drive', 'get'>;
  'GET /drives/{drive-id}/list/operations': Operation<'/drives/{drive-id}/list/operations', 'get'>;
  'POST /drives/{drive-id}/list/operations': Operation<
    '/drives/{drive-id}/list/operations',
    'post'
  >;
  'GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/list']['response']> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list`
 *
 * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/list']['response']> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const drive = {
  /**
   * `GET /drives/{drive-id}/list/drive`
   *
   * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/drive']['response']> {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /drives/{drive-id}/list/operations`
   *
   * The collection of long-running operations on the list.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/operations']['response']> {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
  /**
   * `POST /drives/{drive-id}/list/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/operations']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/operations']['response']> {
    return {
      method: 'post',
      path: '/drives/{drive-id}/list/operations',
      paramDefs: {
        path: ['drive-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
   *
   * The collection of long-running operations on the list.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['drive-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};
