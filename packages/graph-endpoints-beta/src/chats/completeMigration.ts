import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/completeMigration': Operation<
    '/chats/{chat-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/completeMigration`
 *
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/completeMigration']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/completeMigration']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/completeMigration']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/completeMigration',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
