export * as content from './content';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/root': Operation<'/shares/{sharedDriveItem-id}/root', 'get'>;
}

/**
 * `GET /shares/{sharedDriveItem-id}/root`
 *
 * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/root',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
