import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/move': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/move',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/move`
 *
 * Move a mail folder and its contents to another mail folder.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/move',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
