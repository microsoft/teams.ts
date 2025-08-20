export * as permanentDelete from './permanentDelete';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    'delete'
  >;
  'GET /me/outlook/taskFolders': Operation<'/me/outlook/taskFolders', 'get'>;
  'GET /me/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    'get'
  >;
  'PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    'patch'
  >;
  'POST /me/outlook/taskFolders': Operation<'/me/outlook/taskFolders', 'post'>;
}

/**
 * `DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * Delete the specified Outlook task folder.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/taskFolders`
 *
 * Get all the Outlook task folders in the user&#x27;s mailbox.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders',
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
 * `GET /me/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * Get the properties and relationships of the specified Outlook task folder.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * Update the writable properties of an Outlook task folder. You cannot change the name property value of the default task folder, &#x27;Tasks&#x27;.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [{ name: 'outlookTaskFolder-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/outlook/taskFolders`
 *
 * Create a task folder in the default task group (My Tasks) of the user&#x27;s mailbox.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/taskFolders']['body'],
  params?: IEndpoints['POST /me/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskFolders',
    paramDefs: [],
    params,
    body,
  };
}
