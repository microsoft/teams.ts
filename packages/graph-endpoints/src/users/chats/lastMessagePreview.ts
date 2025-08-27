import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/lastMessagePreview`
 *
 * Preview of the last message sent in the chat. Null if no messages were sent in the chat. Currently, only the list chats operation supports this property.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
