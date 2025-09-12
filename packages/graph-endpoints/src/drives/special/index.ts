import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/special': Operation<'/drives/{drive-id}/special', 'get'>;
  'GET /drives/{drive-id}/special/{driveItem-id}': Operation<
    '/drives/{drive-id}/special/{driveItem-id}',
    'get'
  >;
  'GET /drives/{drive-id}/special/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/special/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/special/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/content',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/special`
 *
 * Collection of common folders available in OneDrive. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/special']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/special']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/special',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/special/{driveItem-id}`
 *
 * Collection of common folders available in OneDrive. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/special/{driveItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/special/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/special/{driveItem-id}/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/special/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/drives/{drive-id}/special/{driveItem-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/special/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/special/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/special/{driveItem-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/special/{driveItem-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
