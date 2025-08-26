export * as abort from './abort';
export * as cancel from './cancel';
export * as cancelPrintJob from './cancelPrintJob';
export * as documents from './documents';
export * as redirect from './redirect';
export * as start from './start';
export * as startPrintJob from './startPrintJob';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs': Operation<
    '/print/printerShares/{printerShare-id}/jobs',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs': Operation<
    '/print/printerShares/{printerShare-id}/jobs',
    'post'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs',
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
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
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
 * `PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs',
    paramDefs: [{ name: 'printerShare-id', in: 'path' }],
    params,
    body,
  };
}
