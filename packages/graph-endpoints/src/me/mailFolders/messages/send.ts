import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/send': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/send',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/send`
 *
 * Send an existing draft message. The draft message can be a new message draft, reply draft, reply-all draft, or a forward draft. This method saves the message in the Sent Items folder. Alternatively, send a new message in a single operation.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/send']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/send']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/send']['response']
> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/send',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
