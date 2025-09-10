import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'patch'
  >;
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'delete'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Delete a version of a document set in a list.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions`
 *
 * Get a list of the versions of a document set item in a list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Read the properties and relationships of a documentSetVersion object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions`
 *
 * Create a new version of a document set item in a list.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
   *
   * Restore a document set version.
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};
