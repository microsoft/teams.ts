import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}
