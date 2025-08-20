import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/parentHostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs`
 *
 * Get the list of hostPair resources associated with a host, where that host is the *child* and has an incoming pairing with a *parent*.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/parentHostPairs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}`
 *
 * The hostPairs that are associated with a host, where that host is the childHost and has an incoming pairing with a parentHost.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}
