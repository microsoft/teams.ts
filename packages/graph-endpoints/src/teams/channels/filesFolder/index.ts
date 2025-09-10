import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/channels/{channel-id}/filesFolder': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/filesFolder`
 *
 * Get the metadata for the location where the files of a channel are stored.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'put',
      path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};
