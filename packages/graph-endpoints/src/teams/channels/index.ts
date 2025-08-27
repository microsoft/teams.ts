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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'get'>;
  'GET /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}`
 *
 * Delete the channel.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels`
 *
 * Retrieve the list of channels in this team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels',
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
 * `GET /teams/{team-id}/channels/{channel-id}`
 *
 * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}',
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
 * `PATCH /teams/{team-id}/channels/{channel-id}`
 *
 * Update the properties of the specified channel.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels`
 *
 * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel&#x27;s displayName is 50 characters. This is the name that appears to the user in Microsoft Teams. If you&#x27;re creating a private channel, you can add a maximum of 200 members.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
