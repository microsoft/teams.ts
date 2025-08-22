export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/messages': Operation<'/chats/{chat-id}/messages', 'get'>;
  'GET /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/messages': Operation<'/chats/{chat-id}/messages', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages`
 *
 * Retrieve the list of messages in a chat. This method supports federation. To list chat messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/messages']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages/{chatMessage-id}`
 *
 * Retrieve a single message or a message reply in a channel or a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/messages`
 *
 * Send a new chatMessage in the specified channel or a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/messages']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/messages',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
