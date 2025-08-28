export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/items': Operation<'/shares/{sharedDriveItem-id}/items', 'get'>;
  'GET /shares/{sharedDriveItem-id}/items/{driveItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/items`
 *
 * All driveItems contained in the sharing root. This collection cannot be enumerated.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/items/{driveItem-id}`
 *
 * All driveItems contained in the sharing root. This collection cannot be enumerated.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}
