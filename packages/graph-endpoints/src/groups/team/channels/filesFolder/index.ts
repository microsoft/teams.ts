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
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
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
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
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
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
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
