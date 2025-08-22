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
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels': Operation<'/me/joinedTeams/{team-id}/channels', 'get'>;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels': Operation<
    '/me/joinedTeams/{team-id}/channels',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels`
 *
 * The collection of channels and messages associated with the team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/channels']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}`
 *
 * The collection of channels and messages associated with the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/channels']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
