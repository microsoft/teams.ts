import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/copy': Operation<'/me/messages/{message-id}/copy', 'post'>;
}

/**
 * `POST /me/messages/{message-id}/copy`
 *
 * Copy a message to a folder within the user&#x27;s mailbox.
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/copy']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/copy']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/copy']['response']> {
  return {
    method: 'post',
    path: '/me/messages/{message-id}/copy',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
