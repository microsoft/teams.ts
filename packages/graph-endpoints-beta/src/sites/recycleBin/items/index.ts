export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /sites/{site-id}/recycleBin/items': Operation<'/sites/{site-id}/recycleBin/items', 'get'>;
  'GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /sites/{site-id}/recycleBin/items': Operation<'/sites/{site-id}/recycleBin/items', 'post'>;
  'POST /sites/{site-id}/recycleBin/items/delete': Operation<
    '/sites/{site-id}/recycleBin/items/delete',
    'post'
  >;
  'POST /sites/{site-id}/recycleBin/items/restore': Operation<
    '/sites/{site-id}/recycleBin/items/restore',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'recycleBinItem-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/recycleBin/items`
 *
 * Get a collection of recycleBinItem resources in the recycleBin of the specified SharePoint site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/recycleBin/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/items',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['site-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['site-id', 'recycleBinItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/recycleBin/items',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const doDelete = {
  /**
   * `POST /sites/{site-id}/recycleBin/items/delete`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['body'],
    params?: IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/recycleBin/items/delete',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /sites/{site-id}/recycleBin/items/restore`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['body'],
    params?: IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/recycleBin/items/restore',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};
