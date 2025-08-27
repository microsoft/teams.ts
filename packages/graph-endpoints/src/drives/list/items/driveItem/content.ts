import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'get'
  >;
  'PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    'put'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['body'],
  params?: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'put',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
