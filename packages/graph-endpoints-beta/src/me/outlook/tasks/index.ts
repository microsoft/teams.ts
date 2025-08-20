export * as attachments from './attachments';
export * as complete from './complete';
export * as permanentDelete from './permanentDelete';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTask-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTask-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'outlookTask-id', in: 'path' }],
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
  body: IEndpoints['POST /me/outlook/tasks']['body'],
  params?: IEndpoints['POST /me/outlook/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/tasks',
    paramDefs: [],
    params,
    body,
  };
}
