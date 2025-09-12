export * as createdByUser from './createdByUser';
export * as documentSetVersions from './documentSetVersions';
export * as driveItem from './driveItem';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items': Operation<
    '/sites/{site-id}/lists/{list-id}/items',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items': Operation<
    '/sites/{site-id}/lists/{list-id}/items',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
    'get'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'patch'
  >;
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'delete'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 * Removes an item from a list.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'listItem-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items`
 *
 * Get the collection of items in a list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/items']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 * Returns the metadata for an item in a list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items`
 *
 * Create a new listItem in a list.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items',
    paramDefs: {
      path: ['site-id', 'list-id'],
    },
    params,
    body,
  };
}

export const analytics = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics`
   *
   * Analytics about the view activities that took place on this item.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
};

export const createLink = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const fields = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   * The values of the columns set on this list item.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   * Update the properties on a listItem.
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
};
