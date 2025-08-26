import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/drive',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive`
 *
 * Get the properties of a drive associated with a fileStorageContainer.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}
