export * as childFolders from './childFolders';
export * as contacts from './contacts';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}': Operation<
    '/me/contactFolders/{contactFolder-id}',
    'delete'
  >;
  'GET /me/contactFolders': Operation<'/me/contactFolders', 'get'>;
  'GET /me/contactFolders/{contactFolder-id}': Operation<
    '/me/contactFolders/{contactFolder-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}': Operation<
    '/me/contactFolders/{contactFolder-id}',
    'patch'
  >;
  'POST /me/contactFolders': Operation<'/me/contactFolders', 'post'>;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}`
 *
 * Delete contactFolder other than the default contactFolder.
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/contactFolders/{contactFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders`
 *
 * Get all the contact folders in the signed-in user&#x27;s mailbox.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/contactFolders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}`
 *
 * Get a contact folder by using the contact folder ID. There are two scenarios where an app can get another user&#x27;s contact folder:
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/contactFolders/{contactFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}`
 *
 * Update the properties of contactfolder object.
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/contactFolders/{contactFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}',
    paramDefs: [{ name: 'contactFolder-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders`
 *
 * Create a new contactFolder under the user&#x27;s default contacts folder. You can also create a new contactfolder as a child of any specified contact folder.
 */
export function create(
  body: IEndpoints['POST /me/contactFolders']['body'],
  params?: IEndpoints['POST /me/contactFolders']['parameters']
): EndpointRequest<IEndpoints['POST /me/contactFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders',
    paramDefs: [],
    params,
    body,
  };
}
