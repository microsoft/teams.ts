import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['body'],
  params?: IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/drives/{drive-id}/list/items/{listItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
