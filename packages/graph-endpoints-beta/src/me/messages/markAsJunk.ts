import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/markAsJunk': Operation<
    '/me/messages/{message-id}/markAsJunk',
    'post'
  >;
}

/**
 * `POST /me/messages/{message-id}/markAsJunk`
 *
 * Mark a message as junk. This API adds the sender to the list of blocked senders and moves the message to the Junk Email folder, when moveToJunk is true.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/markAsJunk']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/markAsJunk']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/markAsJunk']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/markAsJunk',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
