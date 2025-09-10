import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/channels/{channel-id}/filesFolder': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
    'put'
  >;
  'DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'get'
  >;
  'PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'put'
  >;
  'DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'delete'
  >;
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};
