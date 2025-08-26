import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/childHostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/childHostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/childHostPairs`
 *
 * Get the list of hostPair resources associated with a specified host, where that host is the *parent* and has an outgoing pairing to a *child*.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/childHostPairs',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}`
 *
 * The hostPairs that are resources associated with a host, where that host is the parentHost and has an outgoing pairing to a cihldHost.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}
