export * as grant from './grant';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'patch'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/permission`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/permission`
 *
 * Used to access the permission representing the underlying sharing link
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/permission`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
