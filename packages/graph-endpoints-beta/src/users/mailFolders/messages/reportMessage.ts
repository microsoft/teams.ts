import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/reportMessage',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
