export * as forwardToChat from './forwardToChat';
export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as replyWithQuote from './replyWithQuote';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
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
 * `GET /teams/{team-id}/channels/{channel-id}/messages`
 *
 * Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages',
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
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * Retrieve a single message or a message reply in a channel or a chat.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
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
 * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * Update a chatMessage object. You can update all the properties of chatMessage in delegated permissions scenarios, except for the policyViolation property and read-only properties. The policyViolation property is the only property that can be updated in application permissions scenarios. Updating works only for chats where conversation members are Microsoft Teams users. If one of the members is using Skype, the operation fails. This method doesn&#x27;t support federation. Only the user in the tenant who sent the message can perform data loss prevention (DLP) updates on the specified chat message.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
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
 * `POST /teams/{team-id}/channels/{channel-id}/messages`
 *
 * Send a new chatMessage in the specified channel or a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
