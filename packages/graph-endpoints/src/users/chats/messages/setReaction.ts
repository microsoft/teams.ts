import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
