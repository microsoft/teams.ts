export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/activities': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/activities': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities',
    'post'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'itemActivityOLD-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const listItem = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
   *
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};
