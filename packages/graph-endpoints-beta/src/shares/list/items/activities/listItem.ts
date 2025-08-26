import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
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
