import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'put',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};
