import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'put'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['body'],
  params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
