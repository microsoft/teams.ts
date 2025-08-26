import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
