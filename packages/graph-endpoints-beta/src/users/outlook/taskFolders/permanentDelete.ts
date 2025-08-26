import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete`
 *
 * Permanently delete an outlook task folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
