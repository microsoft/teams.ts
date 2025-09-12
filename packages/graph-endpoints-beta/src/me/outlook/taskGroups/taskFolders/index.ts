export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'delete'
  >;
  'GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    'get'
  >;
  'GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'get'
  >;
  'PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'patch'
  >;
  'POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    'post'
  >;
  'POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outlookTaskGroup-id', 'outlookTaskFolder-id'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders`
 *
 * Get Outlook task folders in a specific outlookTaskGroup.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    paramDefs: {
      path: ['outlookTaskGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * The collection of task folders in the task group. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      path: ['outlookTaskGroup-id', 'outlookTaskFolder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: {
      path: ['outlookTaskGroup-id', 'outlookTaskFolder-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders`
 *
 * Create an Outlook task folder under a specified outlookTaskGroup.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['body'],
  params?: IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    paramDefs: {
      path: ['outlookTaskGroup-id'],
    },
    params,
    body,
  };
}

export const permanentDelete = {
  /**
   * `POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete`
   *
   * Permanently delete an outlook task folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/permanentDelete',
      paramDefs: {
        path: ['outlookTaskGroup-id', 'outlookTaskFolder-id'],
      },
      params,
    };
  },
};
