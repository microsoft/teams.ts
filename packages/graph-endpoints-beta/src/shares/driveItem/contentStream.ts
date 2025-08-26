import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /shares/{sharedDriveItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/contentStream']['body'],
  params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/shares/{sharedDriveItem-id}/driveItem/contentStream',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
