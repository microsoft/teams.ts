export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group`
 *
 * The group associated with the unifiedGroupSource.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/unifiedGroupSources/{unifiedGroupSource-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}
