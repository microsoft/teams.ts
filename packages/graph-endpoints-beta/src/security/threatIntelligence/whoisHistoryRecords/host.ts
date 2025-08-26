import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host`
 *
 * The host associated to this WHOIS object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisHistoryRecord-id', in: 'path' },
    ],
    params,
  };
}
