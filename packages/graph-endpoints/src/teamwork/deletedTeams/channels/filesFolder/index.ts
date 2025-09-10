import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['body'],
    params?: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'put',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
  > {
    return {
      method: 'delete',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
};
