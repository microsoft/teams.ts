import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'put'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/root/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/root/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/root/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root/contentStream']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/root/contentStream',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /shares/{sharedDriveItem-id}/root/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['body'],
  params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
): EndpointRequest<IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/shares/{sharedDriveItem-id}/root/contentStream',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
