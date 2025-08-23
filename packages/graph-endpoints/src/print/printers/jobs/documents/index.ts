export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    'get'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    'post'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/documents`
 *
 * Download the binary file associated with a printDocument. Calling this method yields a redirect response with a preauthenticated URL that can be used to download the payload.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/documents`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
