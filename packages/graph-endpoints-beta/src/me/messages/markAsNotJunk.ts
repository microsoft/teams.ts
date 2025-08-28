import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/markAsNotJunk': Operation<
    '/me/messages/{message-id}/markAsNotJunk',
    'post'
  >;
}

/**
 * `POST /me/messages/{message-id}/markAsNotJunk`
 *
 * Mark a message as not junk. This API removes the sender from the list of blocked senders and moves the message to the Inbox folder, when moveToInbox is true.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/markAsNotJunk',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
