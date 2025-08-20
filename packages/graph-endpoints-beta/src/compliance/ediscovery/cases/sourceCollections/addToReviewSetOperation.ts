import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation`
 *
 * Get the last addToReviewSetOperation object associated with a source collection.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
  };
}
