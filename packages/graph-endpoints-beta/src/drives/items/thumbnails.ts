import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/thumbnails': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/thumbnails': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'thumbnailSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/thumbnails`
 *
 * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
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
 * `GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
 *
 * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'thumbnailSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'thumbnailSet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/thumbnails`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
