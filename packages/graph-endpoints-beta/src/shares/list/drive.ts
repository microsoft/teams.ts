import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/drive': Operation<
    '/shares/{sharedDriveItem-id}/list/drive',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/drive`
 *
 * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/drive']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/drive']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
