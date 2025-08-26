export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/root': Operation<'/shares/{sharedDriveItem-id}/root', 'get'>;
}

/**
 * `GET /shares/{sharedDriveItem-id}/root`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root']['response']> {
  return {
    ver: 'beta',
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
