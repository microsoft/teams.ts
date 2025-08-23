import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['body'],
  params?: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'put',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
