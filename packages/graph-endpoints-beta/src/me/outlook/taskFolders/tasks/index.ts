export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'delete'
  >;
  'GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'get'
  >;
  'GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'get'
  >;
  'PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'patch'
  >;
  'POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'post'
  >;
  'POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
    'post'
  >;
  'POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outlookTaskFolder-id', 'outlookTask-id'],
    },
    params,
  };
}

/**
  * `GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
  *
  * Get all the Outlook tasks in the specified folder. By default, this operation (and the POST, PATCH, and complete task operations) returns
date-related properties in UTC.  You can use a Prefer: outlook.timezone request header to have all the date-related properties in the response represented in a time zone
different than UTC. See an example for getting a single task. You can apply the header similarly to get multiple tasks. If there is more than one task group, and you want to get all the tasks in a specific task group, first
get all the task folders in that task group,
and then get the tasks in each of these task folders.
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: {
      path: ['outlookTaskFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['outlookTaskFolder-id', 'outlookTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['outlookTaskFolder-id', 'outlookTask-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
  *
  * Create an Outlook task in the specified task folder. The POST method always ignores the time portion of startDateTime and dueDateTime in the request body, and assumes the time 
to be always midnight in the specified time zone.
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['body'],
  params?: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: {
      path: ['outlookTaskFolder-id'],
    },
    params,
    body,
  };
}

export const complete = {
  /**
   * `POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete`
   *
   * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
      paramDefs: {
        path: ['outlookTaskFolder-id', 'outlookTask-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete`
   *
   * Permanently delete an Outlook task and place it in the Purges folder in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/permanentDelete',
      paramDefs: {
        path: ['outlookTaskFolder-id', 'outlookTask-id'],
      },
      params,
    };
  },
};
