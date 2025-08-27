import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy`
 *
 * Copy a message to a folder within the user&#x27;s mailbox.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/copy',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
