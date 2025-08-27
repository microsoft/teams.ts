import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/markAsJunk': Operation<
    '/users/{user-id}/messages/{message-id}/markAsJunk',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/messages/{message-id}/markAsJunk`
 *
 * Mark a message as junk. This API adds the sender to the list of blocked senders and moves the message to the Junk Email folder, when moveToJunk is true.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/markAsJunk',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
