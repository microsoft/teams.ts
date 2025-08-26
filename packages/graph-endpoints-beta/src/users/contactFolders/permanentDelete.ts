import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete`
 *
 * Permanently delete a contact folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
