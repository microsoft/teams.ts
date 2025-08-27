import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/move': Operation<'/me/messages/{message-id}/move', 'post'>;
}

/**
 * `POST /me/messages/{message-id}/move`
 *
 * Move a message to another folder within the specified user&#x27;s mailbox. This creates a new copy of the message in the destination folder and removes the original message.
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/move']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/move']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/move']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/move',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
