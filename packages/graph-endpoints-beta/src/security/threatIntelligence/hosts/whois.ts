import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/whois': Operation<
    '/security/threatIntelligence/hosts/{host-id}/whois',
    'get'
  >;
}

/**
  * `GET /security/threatIntelligence/hosts/{host-id}/whois`
  *
  * Get the specified whoisRecord resource.  Specify the desired whoisRecord in one of the following two ways:
- Identify a host and get its current whoisRecord. 
- Specify an id value to get the corresponding whoisRecord.
  */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/whois']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/whois']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/whois',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}
