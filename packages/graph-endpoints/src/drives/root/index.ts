import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/root': Operation<'/drives/{drive-id}/root', 'get'>;
  'GET /drives/{drive-id}/root/content': Operation<'/drives/{drive-id}/root/content', 'get'>;
  'PUT /drives/{drive-id}/root/content': Operation<'/drives/{drive-id}/root/content', 'put'>;
  'DELETE /drives/{drive-id}/root/content': Operation<'/drives/{drive-id}/root/content', 'delete'>;
}

/**
 * `GET /drives/{drive-id}/root`
 *
 * The root folder of the drive. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/root']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/root',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['GET /drives/{drive-id}/root/content']['response']> {
    return {
      method: 'get',
      path: '/drives/{drive-id}/root/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/root/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['PUT /drives/{drive-id}/root/content']['response']> {
    return {
      method: 'put',
      path: '/drives/{drive-id}/root/content',
      paramDefs: {
        path: ['drive-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/root/content']['response']> {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/root/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id'],
      },
      params,
    };
  },
};
