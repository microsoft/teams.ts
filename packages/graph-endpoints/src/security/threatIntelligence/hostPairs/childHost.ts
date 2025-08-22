import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}/childHost',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost`
 *
 * Host reached via the parentHost.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}/childHost',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}
