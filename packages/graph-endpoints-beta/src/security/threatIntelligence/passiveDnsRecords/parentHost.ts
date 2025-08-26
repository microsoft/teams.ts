import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost`
 *
 * The parent host related to this passiveDnsRecord entry. Generally, this is the value that you can search to discover this passiveDnsRecord value.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}
