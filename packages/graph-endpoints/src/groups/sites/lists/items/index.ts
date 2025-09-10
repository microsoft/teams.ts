export * as createdByUser from './createdByUser';
export * as documentSetVersions from './documentSetVersions';
export * as driveItem from './driveItem';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items`
 *
 * All items contained in the list.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 * All items contained in the list.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
    },
    params,
    body,
  };
}

export const analytics = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics`
   *
   * Analytics about the view activities that took place on this item.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
};

export const createLink = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const fields = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   * The values of the columns set on this list item.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
};
