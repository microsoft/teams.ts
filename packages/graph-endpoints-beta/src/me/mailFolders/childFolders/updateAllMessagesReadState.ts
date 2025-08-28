import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState`
 *
 * Update the read state of all messages in a mailFolder object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
