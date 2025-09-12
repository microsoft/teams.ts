export * as childFolders from './childFolders';
export * as contacts from './contacts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/contactFolders': Operation<'/users/{user-id}/contactFolders', 'get'>;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/contactFolders': Operation<'/users/{user-id}/contactFolders', 'post'>;
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'contactFolder-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders`
 *
 * The user&#x27;s contacts folders. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contactFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contactFolders']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/contactFolders',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 * The user&#x27;s contacts folders. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: {
      path: ['user-id', 'contactFolder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: {
      path: ['user-id', 'contactFolder-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contactFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/contactFolders']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/contactFolders',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'contactFolder-id'],
      },
      params,
    };
  },
};
