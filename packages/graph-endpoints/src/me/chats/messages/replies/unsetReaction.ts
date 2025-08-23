import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
