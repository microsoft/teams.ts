import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base`
 *
 * Parent contentType from which this content type is derived.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}
