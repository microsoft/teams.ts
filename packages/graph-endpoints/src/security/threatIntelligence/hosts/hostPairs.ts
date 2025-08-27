import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/hostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/hostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/hostPairs`
 *
 * Get the list of hostPair resources associated with a host, where that host is *either* the *parent* or the *child*.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/hostPairs',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}`
 *
 * The hostPairs that are associated with this host, where this host is either the parentHost or childHost.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}
