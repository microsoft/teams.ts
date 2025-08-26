import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy`
 *
 * Copy a message to a folder within the user&#x27;s mailbox.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy']['response']
> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/copy',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
