import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/subdomains': Operation<
    '/security/threatIntelligence/hosts/{host-id}/subdomains',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/subdomains`
 *
 * Get the list of subdomain resources associated with a host.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/subdomains',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}`
 *
 * The subdomains that are associated with this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'subdomain-id', in: 'path' },
    ],
    params,
  };
}
