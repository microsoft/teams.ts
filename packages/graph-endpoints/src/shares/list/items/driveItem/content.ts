import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    'put'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['body'],
  params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content']['response']
> {
  return {
    method: 'put',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
