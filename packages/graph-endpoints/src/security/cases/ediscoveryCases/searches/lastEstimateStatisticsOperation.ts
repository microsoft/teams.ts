import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation',
    'get'
  >;
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation`
 *
 * Get the last  ediscoveryEstimateOperation objects and their properties.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
  };
}
