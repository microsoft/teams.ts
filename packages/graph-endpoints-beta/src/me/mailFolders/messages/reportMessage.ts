import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage`
 *
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
