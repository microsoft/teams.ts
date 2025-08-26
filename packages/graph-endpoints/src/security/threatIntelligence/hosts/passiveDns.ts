import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDns': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDns',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/passiveDns`
 *
 * Get a list of passiveDnsRecord resources associated with a host. This method is a forward DNS lookup that queries the IP address of the specified host using its hostname.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/passiveDns',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}`
 *
 * Passive DNS retrieval about this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}
