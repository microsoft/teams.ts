export * as allMembers from './allMembers';
export * as archive from './archive';
export * as completeMigration from './completeMigration';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as provisionEmail from './provisionEmail';
export * as removeEmail from './removeEmail';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/channels': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels`
 *
 * The collection of channels and messages associated with the team.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}`
 *
 * The collection of channels and messages associated with the team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
