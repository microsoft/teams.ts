export * as definition from './definition';
export * as trigger from './trigger';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
