import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
