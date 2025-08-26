import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete`
 *
 * Permanently delete a mail folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
