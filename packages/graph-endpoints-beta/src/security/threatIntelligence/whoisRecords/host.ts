import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host`
 *
 * The host associated to this WHOIS object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisRecord-id', in: 'path' },
    ],
    params,
  };
}
