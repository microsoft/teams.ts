import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/copy': Operation<
    '/me/mailFolders/{mailFolder-id}/copy',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/copy`
 *
 * Copy a mail folder and its contents to another mail folder.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/copy',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
