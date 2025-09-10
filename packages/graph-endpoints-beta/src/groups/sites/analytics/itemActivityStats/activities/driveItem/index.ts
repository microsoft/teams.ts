import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'put'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'put'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'delete'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem`
 *
 * Exposes the driveItem that was the target of this activity.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
};
