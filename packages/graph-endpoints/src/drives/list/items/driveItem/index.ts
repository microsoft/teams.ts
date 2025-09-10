import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/items/{listItem-id}/driveItem': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'get'
  >;
  'PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'delete'
  >;
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/driveItem`
 *
 * For document libraries, the driveItem relationship exposes the listItem as a driveItem
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
  > {
    return {
      method: 'put',
      path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
      paramDefs: {
        path: ['drive-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'listItem-id'],
      },
      params,
    };
  },
};
