import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/listItem': Operation<
    '/shares/{sharedDriveItem-id}/listItem',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/listItem`
 *
 * Used to access the underlying listItem
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/listItem']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/listItem']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/listItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
