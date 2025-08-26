import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk`
 *
 * Mark a message as not junk. This API removes the sender from the list of blocked senders and moves the message to the Inbox folder, when moveToInbox is true.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/markAsNotJunk',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
