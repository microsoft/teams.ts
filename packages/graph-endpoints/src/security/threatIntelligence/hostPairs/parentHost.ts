import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}/parentHost',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost`
 *
 * Host used to reach the childHost.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}/parentHost',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}
