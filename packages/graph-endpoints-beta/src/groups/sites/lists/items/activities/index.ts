export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const listItem = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};
