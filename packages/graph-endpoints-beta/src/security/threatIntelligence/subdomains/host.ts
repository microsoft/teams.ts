import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/subdomains/{subdomain-id}/host': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/subdomains/{subdomain-id}/host`
 *
 * The host of the subdomain.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}/host']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subdomain-id', in: 'path' },
    ],
    params,
  };
}
