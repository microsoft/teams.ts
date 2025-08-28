export * as definition from './definition';
export * as trigger from './trigger';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
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
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * A list of printTasks that were triggered by this print job.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
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
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * A list of printTasks that were triggered by this print job.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
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
 * `PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
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
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
