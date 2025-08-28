import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/updateAllMessagesReadState': Operation<
    '/me/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/updateAllMessagesReadState`
 *
 * Update the read state of all messages in a mailFolder object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
