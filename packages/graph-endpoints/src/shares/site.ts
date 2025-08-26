import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/site': Operation<'/shares/{sharedDriveItem-id}/site', 'get'>;
}

/**
 * `GET /shares/{sharedDriveItem-id}/site`
 *
 * Used to access the underlying site
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/site']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/site']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/site',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
