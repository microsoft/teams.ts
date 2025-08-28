import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/inactiveUsersByApplication': Operation<
    '/reports/userInsights/daily/inactiveUsersByApplication',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}': Operation<
    '/reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/inactiveUsersByApplication`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/inactiveUsersByApplication',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'dailyInactiveUsersByApplicationMetric-id', in: 'path' },
    ],
    params,
  };
}
