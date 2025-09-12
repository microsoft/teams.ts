export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/tasks/{outlookTask-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}',
    'delete'
  >;
  'GET /me/outlook/tasks': Operation<'/me/outlook/tasks', 'get'>;
  'GET /me/outlook/tasks/{outlookTask-id}': Operation<'/me/outlook/tasks/{outlookTask-id}', 'get'>;
  'PATCH /me/outlook/tasks/{outlookTask-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}',
    'patch'
  >;
  'POST /me/outlook/tasks': Operation<'/me/outlook/tasks', 'post'>;
  'POST /me/outlook/tasks/{outlookTask-id}/complete': Operation<
    '/me/outlook/tasks/{outlookTask-id}/complete',
    'post'
  >;
  'POST /me/outlook/tasks/{outlookTask-id}/permanentDelete': Operation<
    '/me/outlook/tasks/{outlookTask-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/tasks/{outlookTask-id}`
 *
 * Delete the specified Outlook task in the user&#x27;s mailbox.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/tasks/{outlookTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outlookTask-id'],
    },
    params,
  };
}

/**
  * `GET /me/outlook/tasks`
  *
  * Get all the Outlook tasks in the user&#x27;s mailbox. By default, this operation (and the POST, PATCH, and complete task operations) returns date-related properties in UTC.
You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone
different than UTC. See an example for getting a single task. You can apply the header similarly to get multiple tasks.
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /me/outlook/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/tasks/{outlookTask-id}`
 *
 * Get the properties and relationships of an Outlook task in the user&#x27;s mailbox. By default, this operation (and the POST, PATCH, and complete task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/tasks/{outlookTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['outlookTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/outlook/tasks/{outlookTask-id}`
 *
 * Change writable properties of an Outlook task. The completedDateTime property can be set by the complete action, or explicitly by a PATCH operation. If you use PATCH to set completedDateTime, make sure you set status to completed as well. By default, this operation (and the POST, GET, and complete task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/tasks/{outlookTask-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/outlook/tasks/{outlookTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/tasks/{outlookTask-id}',
    paramDefs: {
      path: ['outlookTask-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /me/outlook/tasks`
  *
  * Create an Outlook task in the default task group (My Tasks) and default task folder (Tasks) in the user&#x27;s mailbox. The POST method always ignores the time portion of startDateTime and dueDateTime in the request body, and assumes the time 
to be always midnight in the specified time zone. By default, this operation (and the GET, PATCH, and complete task operations) returns date-related properties in UTC. 
You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone 
different than UTC.
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /me/outlook/tasks']['body']
): EndpointRequest<IEndpoints['POST /me/outlook/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/tasks',
    body,
  };
}

export const complete = {
  /**
   * `POST /me/outlook/tasks/{outlookTask-id}/complete`
   *
   * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/complete']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/complete']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/tasks/{outlookTask-id}/complete',
      paramDefs: {
        path: ['outlookTask-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/outlook/tasks/{outlookTask-id}/permanentDelete`
   *
   * Permanently delete an Outlook task and place it in the Purges folder in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/tasks/{outlookTask-id}/permanentDelete',
      paramDefs: {
        path: ['outlookTask-id'],
      },
      params,
    };
  },
};
