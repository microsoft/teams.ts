import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/hideForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/hideForUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/hideForUser`
 *
 * Hide a chat for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/hideForUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
