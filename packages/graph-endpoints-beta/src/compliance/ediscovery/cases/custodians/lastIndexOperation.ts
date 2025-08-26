import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
  };
}
