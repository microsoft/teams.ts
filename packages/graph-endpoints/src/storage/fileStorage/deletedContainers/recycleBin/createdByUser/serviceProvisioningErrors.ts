import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors',
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
    ],
    params,
  };
}
