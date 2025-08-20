import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact`
 *
 * The artifact related to this passiveDnsRecord entry.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}
