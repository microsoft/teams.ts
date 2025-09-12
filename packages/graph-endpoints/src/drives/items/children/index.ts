import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/children': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/children': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/children`
 *
 * Return a collection of DriveItems in the children relationship of a DriveItem. DriveItems with a non-null folder or package facet can have one or more child DriveItems.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/children',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}`
 *
 * Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'driveItem-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/children',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id', 'driveItem-id1'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['response']
  > {
    return {
      method: 'put',
      path: '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'driveItem-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'driveItem-id1'],
      },
      params,
    };
  },
};
