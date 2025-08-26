import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}
