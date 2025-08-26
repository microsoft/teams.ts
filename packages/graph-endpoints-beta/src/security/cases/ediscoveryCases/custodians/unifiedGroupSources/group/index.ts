export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group',
    'get'
  >;
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group`
 *
 * Represents a group.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}
