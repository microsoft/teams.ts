export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    'post'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
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
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
