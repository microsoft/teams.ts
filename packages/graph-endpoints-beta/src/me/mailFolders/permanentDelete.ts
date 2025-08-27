import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/permanentDelete': Operation<
    '/me/mailFolders/{mailFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/permanentDelete`
 *
 * Permanently delete a mail folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/permanentDelete',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
