import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
