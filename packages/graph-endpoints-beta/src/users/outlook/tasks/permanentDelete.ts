import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete': Operation<
    '/users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete`
 *
 * Permanently delete an Outlook task and place it in the Purges folder in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/tasks/{outlookTask-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
