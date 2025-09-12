export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskFolders': Operation<
    '/users/{user-id}/outlook/taskFolders',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/taskFolders': Operation<
    '/users/{user-id}/outlook/taskFolders',
    'post'
  >;
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'outlookTaskFolder-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders`
 *
 * The user&#x27;s Outlook task folders. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * The user&#x27;s Outlook task folders. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskFolders`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete`
   *
   * Permanently delete an outlook task folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'outlookTaskFolder-id'],
      },
      params,
    };
  },
};
