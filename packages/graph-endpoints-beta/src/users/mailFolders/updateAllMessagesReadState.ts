import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState`
 *
 * Update the read state of all messages in a mailFolder object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
