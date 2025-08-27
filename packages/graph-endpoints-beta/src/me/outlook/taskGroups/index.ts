export * as taskFolders from './taskFolders';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    'delete'
  >;
  'GET /me/outlook/taskGroups': Operation<'/me/outlook/taskGroups', 'get'>;
  'GET /me/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    'get'
  >;
  'PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    'patch'
  >;
  'POST /me/outlook/taskGroups': Operation<'/me/outlook/taskGroups', 'post'>;
}

/**
 * `DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * Delete the specified outlookTaskGroup.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/taskGroups`
 *
 * Get all the Outlook task groups in the user&#x27;s mailbox. The response always includes the default task group My Tasks, and any other task groups that have been created in the mailbox.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/taskGroups']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/taskGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups',
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
 * `GET /me/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * Get the properties and relationships of the specified Outlook task group.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * Update the writable properties of an Outlook task group. You can&#x27;t modify the name of the default task group, &#x27;My Tasks&#x27;.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [{ name: 'outlookTaskGroup-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/outlook/taskGroups`
 *
 * Create an Outlook task group in the user&#x27;s mailbox.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/taskGroups']['body'],
  params?: IEndpoints['POST /me/outlook/taskGroups']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/taskGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskGroups',
    paramDefs: [],
    params,
    body,
  };
}
