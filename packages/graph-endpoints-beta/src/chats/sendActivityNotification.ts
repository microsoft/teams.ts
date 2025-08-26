import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/sendActivityNotification': Operation<
    '/chats/{chat-id}/sendActivityNotification',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/sendActivityNotification`
 *
 * Send an activity feed notification in the scope of a chat. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/sendActivityNotification',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
