export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
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
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
