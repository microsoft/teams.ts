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
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['response']> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/permanentDelete',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
