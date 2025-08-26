import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors',
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
