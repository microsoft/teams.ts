import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/completeMigration': Operation<
    '/me/chats/{chat-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/completeMigration`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/completeMigration']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/completeMigration']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/completeMigration']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/completeMigration',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
