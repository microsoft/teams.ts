import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'GET /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
}

/**
 * `DELETE /chats/{chat-id}/lastMessagePreview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/lastMessagePreview`
 *
 * Preview of the last message sent in the chat. Null if no messages are sent in the chat. Currently, only the list chats operation supports this property.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/lastMessagePreview`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/chats/{chat-id}/lastMessagePreview',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
