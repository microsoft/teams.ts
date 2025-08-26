import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/completeMigration': Operation<
    '/users/{user-id}/chats/{chat-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/completeMigration`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/completeMigration']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/completeMigration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/completeMigration',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
