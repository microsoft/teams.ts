import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
    'put'
  >;
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
    'get'
  >;
  'PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
    'put'
  >;
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
    'delete'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['body'],
    params?: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
    };
  },
};
