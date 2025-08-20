import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
