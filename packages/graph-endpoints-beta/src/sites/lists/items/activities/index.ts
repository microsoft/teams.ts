export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const listItem = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
   *
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};
