export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'post'
  >;
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
    'post'
  >;
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'outlookTaskFolder-id', 'outlookTask-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id', 'outlookTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id', 'outlookTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: {
      path: ['user-id', 'outlookTaskFolder-id'],
    },
    params,
    body,
  };
}

export const complete = {
  /**
   * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete`
   *
   * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
      paramDefs: {
        path: ['user-id', 'outlookTaskFolder-id', 'outlookTask-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete`
   *
   * Permanently delete an Outlook task and place it in the Purges folder in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'outlookTaskFolder-id', 'outlookTask-id'],
      },
      params,
    };
  },
};
