import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
