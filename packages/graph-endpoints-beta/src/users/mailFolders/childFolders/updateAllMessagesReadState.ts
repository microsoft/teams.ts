import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState`
 *
 * Update the read state of all messages in a mailFolder object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
