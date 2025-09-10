import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/following': Operation<'/drives/{drive-id}/following', 'get'>;
  'GET /drives/{drive-id}/following/{driveItem-id}': Operation<
    '/drives/{drive-id}/following/{driveItem-id}',
    'get'
  >;
  'GET /drives/{drive-id}/following/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/following/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/following/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/content',
    'delete'
  >;
  'GET /drives/{drive-id}/following/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/contentStream',
    'get'
  >;
  'PUT /drives/{drive-id}/following/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/contentStream',
    'put'
  >;
  'DELETE /drives/{drive-id}/following/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/following/{driveItem-id}/contentStream',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/following`
 *
 * The list of items the user is following. Only in OneDrive for Business.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/following']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/following']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/following',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/following/{driveItem-id}`
 *
 * The list of items the user is following. Only in OneDrive for Business.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/following/{driveItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/following/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/following/{driveItem-id}/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/following/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/drives/{drive-id}/following/{driveItem-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/following/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/following/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/following/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/following/{driveItem-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /drives/{drive-id}/following/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/following/{driveItem-id}/contentStream',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/following/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/contentStream']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/following/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/drives/{drive-id}/following/{driveItem-id}/contentStream',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/following/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/following/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/following/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/following/{driveItem-id}/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
