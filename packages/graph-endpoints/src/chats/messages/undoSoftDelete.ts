import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
