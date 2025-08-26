import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'GET /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/lastMessagePreview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/lastMessagePreview`
 *
 * Preview of the last message sent in the chat. Null if no messages were sent in the chat. Currently, only the list chats operation supports this property.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/lastMessagePreview`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/lastMessagePreview',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
