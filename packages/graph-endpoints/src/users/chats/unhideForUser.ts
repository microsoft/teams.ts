import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/unhideForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/unhideForUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/unhideForUser`
 *
 * Unhide a chat for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/unhideForUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
