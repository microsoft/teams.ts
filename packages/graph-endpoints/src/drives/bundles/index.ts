import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/bundles': Operation<'/drives/{drive-id}/bundles', 'get'>;
  'GET /drives/{drive-id}/bundles/{driveItem-id}': Operation<
    '/drives/{drive-id}/bundles/{driveItem-id}',
    'get'
  >;
  'POST /drives/{drive-id}/bundles': Operation<'/drives/{drive-id}/bundles', 'post'>;
  'GET /drives/{drive-id}/bundles/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/bundles/{driveItem-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/bundles/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/bundles/{driveItem-id}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/bundles/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/bundles/{driveItem-id}/content',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/bundles`
 *
 * Collection of bundles (albums and multi-select-shared sets of items). Only in personal OneDrive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/bundles']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/bundles']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/bundles',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/bundles/{driveItem-id}`
 *
 * Collection of bundles (albums and multi-select-shared sets of items). Only in personal OneDrive.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/bundles/{driveItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /drives/{drive-id}/bundles`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/bundles']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/bundles']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/bundles']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/bundles',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/bundles/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/bundles/{driveItem-id}/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/bundles/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/bundles/{driveItem-id}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/bundles/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/bundles/{driveItem-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/drives/{drive-id}/bundles/{driveItem-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/bundles/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/bundles/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/bundles/{driveItem-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/bundles/{driveItem-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
