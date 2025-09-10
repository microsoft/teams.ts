import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
    'get'
  >;
  'PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
    'put'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem`
 *
 * For document libraries, the driveItem relationship exposes the listItem as a driveItem
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    paramDefs: {
      path: ['site-id', 'list-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const contentStream = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['body'],
    params?: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
      paramDefs: {
        path: ['site-id', 'list-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};
