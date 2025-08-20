import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
