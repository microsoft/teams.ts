import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}
