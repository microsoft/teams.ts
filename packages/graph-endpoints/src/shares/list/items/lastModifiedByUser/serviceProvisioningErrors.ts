import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors',
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
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}
