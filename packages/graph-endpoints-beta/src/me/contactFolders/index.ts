export * as childFolders from './childFolders';
export * as contacts from './contacts';

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
  'POST /me/contactFolders/{contactFolder-id}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/permanentDelete',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['contactFolder-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['contactFolder-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['contactFolder-id'],
    },
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
  body: IEndpoints['POST /me/contactFolders']['body']
): EndpointRequest<IEndpoints['POST /me/contactFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders',
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /me/contactFolders/{contactFolder-id}/permanentDelete`
   *
   * Permanently delete a contact folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/permanentDelete',
      paramDefs: {
        path: ['contactFolder-id'],
      },
      params,
    };
  },
};
