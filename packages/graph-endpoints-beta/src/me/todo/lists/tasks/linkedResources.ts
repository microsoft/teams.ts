import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'patch'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'post'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
 *
 * Delete a linkedResource object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'linkedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
 *
 * Get information of one or more items in a partner application, based on which a specified task was created. The information is represented in a linkedResource object for each item. It includes an external ID for the item in the partner application, and if applicable, a deep link to that item in the application.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
 *
 * Read the properties and relationships of a linkedResource object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'linkedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
 *
 * Update the properties of a linkedResource object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'linkedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
 *
 * Create a linkedResource object to associate a specified task with an item in a partner application. For example, you can associate a task with an email item in Outlook that spurred the task, and you can create a linkedResource object to track its association. You can also create a linkedResource object while creating a todoTask.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
