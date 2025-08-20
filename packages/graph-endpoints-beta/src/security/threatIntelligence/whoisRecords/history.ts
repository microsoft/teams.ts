import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history',
    'get'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history`
 *
 * The collection of historical records associated to this WHOIS object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}`
 *
 * The collection of historical records associated to this WHOIS object.
 */
export function get$1(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisRecord-id', in: 'path' },
      { name: 'whoisHistoryRecord-id', in: 'path' },
    ],
    params,
  };
}
