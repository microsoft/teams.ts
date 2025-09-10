export * as contacts from './contacts';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'delete'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders',
    'get'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'patch'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders',
    'post'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['contactFolder-id', 'contactFolder-id1'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders`
 *
 * Get a collection of child folders under the specified contact folder.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders',
    paramDefs: {
      path: ['contactFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders`
 *
 * Create a new contactFolder as a child of a specified folder.  You can also create a new contactFolder under the user&#x27;s default contact folder.
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders',
    paramDefs: {
      path: ['contactFolder-id'],
    },
    params,
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete`
   *
   * Permanently delete a contact folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['contactFolder-id', 'contactFolder-id1'],
      },
      params,
    };
  },
};
