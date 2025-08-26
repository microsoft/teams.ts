import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse`
 *
 * Get a collection of passiveDnsRecord resources from a reverse passive DNS retrieval.  A reverse DNS lookup queries the hostname of a host using an IP address.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}`
 *
 * Reverse passive DNS retrieval about this host.
 */
export function get$1(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}
