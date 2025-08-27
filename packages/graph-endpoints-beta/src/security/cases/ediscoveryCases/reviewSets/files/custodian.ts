import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian',
    'get'
  >;
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian`
 *
 * Custodians associated with the file.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewSet-id', in: 'path' },
      { name: 'ediscoveryFile-id', in: 'path' },
    ],
    params,
  };
}
