import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/inactiveUsersByApplication': Operation<
    '/reports/userInsights/monthly/inactiveUsersByApplication',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}': Operation<
    '/reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/inactiveUsersByApplication`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/inactiveUsersByApplication',
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
 * `GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'monthlyInactiveUsersByApplicationMetric-id', in: 'path' },
    ],
    params,
  };
}
