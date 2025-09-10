import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'patch'
  >;
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'delete'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 * SharePoint can be configured to retain the history for list items. Previous versions may be retained for a finite period of time depending on admin settings which may be unique per user or location.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * Retrieve the metadata for a specific version of a ListItem.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};

export const restoreVersion = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
   *
   * Restore a previous version of a ListItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the item.
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};
