import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'put'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem`
 *
 * Exposes the driveItem that was the target of this activity.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
};
