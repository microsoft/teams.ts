import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation',
    'get'
  >;
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation`
 *
 * Adds the results of the eDiscovery search to the specified reviewSet.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
  };
}
