import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'get'
  >;
  'PUT /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'put'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'delete'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['body'],
    params?: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'put',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};
