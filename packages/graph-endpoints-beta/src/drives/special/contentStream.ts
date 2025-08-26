import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/special/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    'delete'
  >;
  'GET /drives/{drive-id}/special/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    'get'
  >;
  'PUT /drives/{drive-id}/special/{driveItem-id}/contentStream': Operation<
    '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    'put'
  >;
}

/**
 * `DELETE /drives/{drive-id}/special/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/special/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/special/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/special/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /drives/{drive-id}/special/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/contentStream']['body'],
  params?: IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /drives/{drive-id}/special/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/drives/{drive-id}/special/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
