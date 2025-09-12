export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/delete',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/restore',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'recycleBinItem-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'recycleBinItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const doDelete = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/delete',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/restore',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};
