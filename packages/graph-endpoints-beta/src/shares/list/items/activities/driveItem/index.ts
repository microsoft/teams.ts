export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}
