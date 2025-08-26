import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}
