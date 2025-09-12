import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'patch'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'delete'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions`
 *
 * The list of previous versions of the list item.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * The list of previous versions of the list item.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};

export const restoreVersion = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
   *
   */
  create: function create(
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};
