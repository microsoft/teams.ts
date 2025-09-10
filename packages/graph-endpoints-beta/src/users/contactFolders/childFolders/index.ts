export * as contacts from './contacts';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'delete'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    'get'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'patch'
  >;
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    'post'
  >;
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'contactFolder-id', 'contactFolder-id1'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders`
 *
 * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    paramDefs: {
      path: ['user-id', 'contactFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      path: ['user-id', 'contactFolder-id', 'contactFolder-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: {
      path: ['user-id', 'contactFolder-id', 'contactFolder-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    paramDefs: {
      path: ['user-id', 'contactFolder-id'],
    },
    params,
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete`
   *
   * Permanently delete a contact folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'contactFolder-id', 'contactFolder-id1'],
      },
      params,
    };
  },
};
