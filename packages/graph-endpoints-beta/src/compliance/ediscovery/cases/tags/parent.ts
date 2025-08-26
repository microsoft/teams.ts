import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent`
 *
 * Returns the parent tag of the specified tag.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
    ],
    params,
  };
}
