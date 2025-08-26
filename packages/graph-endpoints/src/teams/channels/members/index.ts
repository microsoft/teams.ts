export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/members': Operation<
    '/teams/{team-id}/channels/{channel-id}/members',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/members': Operation<
    '/teams/{team-id}/channels/{channel-id}/members',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Delete a conversationMember from a channel.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/members`
 *
 * Get a list of members in a channel, including direct members of standard, private, and shared channels. Use the List allMembers API to retrieve both direct and indirect members of a shared channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/members',
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
 * `GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Get a conversationMember from a channel.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Update the role of a conversationMember in a channel. This operation is allowed only for channels with a membershipType value of private or shared.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/members`
 *
 * Add a conversationMember to a channel.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/members',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
