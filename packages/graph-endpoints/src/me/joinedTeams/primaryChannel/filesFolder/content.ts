import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'get'
  >;
  'PUT /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['body'],
  params?: IEndpoints['PUT /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/joinedTeams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    method: 'put',
    path: '/me/joinedTeams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
