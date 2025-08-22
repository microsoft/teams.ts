export * as abort from './abort';
export * as cancel from './cancel';
export * as documents from './documents';
export * as redirect from './redirect';
export * as start from './start';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs': Operation<
    '/print/shares/{printerShare-id}/jobs',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs': Operation<
    '/print/shares/{printerShare-id}/jobs',
    'post'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs`
 *
 * Retrieve a list of print jobs associated with the printerShare.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/jobs']['response']> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs',
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
    ],
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs`
 *
 * Create a new printJob for a printerShare.  Also creates a new printDocument associated with the printJob.
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/shares/{printerShare-id}/jobs']['response']> {
  return {
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs',
    paramDefs: [{ name: 'printerShare-id', in: 'path' }],
    params,
    body,
  };
}
