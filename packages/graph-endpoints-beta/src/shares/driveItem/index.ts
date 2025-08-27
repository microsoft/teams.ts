export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/driveItem': Operation<
    '/shares/{sharedDriveItem-id}/driveItem',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/driveItem`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/driveItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
