import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser`
 *
 * Remove access to a chat for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/removeAllAccessForUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
