import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/sendActivityNotification': Operation<
    '/users/{user-id}/chats/{chat-id}/sendActivityNotification',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/sendActivityNotification`
 *
 * Send an activity feed notification in the scope of a chat. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/sendActivityNotification',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
