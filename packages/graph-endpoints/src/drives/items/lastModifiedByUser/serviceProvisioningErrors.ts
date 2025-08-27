import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}
