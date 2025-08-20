export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'delete'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'patch'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents',
    'post'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
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
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents',
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
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
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
 * `PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
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
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/documents',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
