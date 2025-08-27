import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'put'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/root/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/root/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/root/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/root/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /shares/{sharedDriveItem-id}/root/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function set(
  body: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['body'],
  params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['parameters']
): EndpointRequest<IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/shares/{sharedDriveItem-id}/root/content',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
