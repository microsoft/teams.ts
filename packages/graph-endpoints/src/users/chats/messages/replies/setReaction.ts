import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
