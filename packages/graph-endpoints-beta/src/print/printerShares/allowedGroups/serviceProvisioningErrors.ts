import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
