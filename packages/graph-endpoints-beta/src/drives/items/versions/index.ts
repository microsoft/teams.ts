export * as content from './content';
export * as restoreVersion from './restoreVersion';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/versions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/versions`
 *
 * The list of previous versions of the item. For more info, see getting previous versions. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 * The list of previous versions of the item. For more info, see getting previous versions. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
