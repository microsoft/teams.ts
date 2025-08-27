import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/userCount': Operation<
    '/reports/userInsights/daily/userCount',
    'get'
  >;
  'GET /reports/userInsights/daily/userCount/{userCountMetric-id}': Operation<
    '/reports/userInsights/daily/userCount/{userCountMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/userCount`
 *
 * Get a list of daily user count on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/userCount']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/userCount']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/userCount',
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
 * `GET /reports/userInsights/daily/userCount/{userCountMetric-id}`
 *
 * Insights for total users on apps registered in the tenant for a specified period.
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/daily/userCount/{userCountMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/userCount/{userCountMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/userCount/{userCountMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userCountMetric-id', in: 'path' },
    ],
    params,
  };
}
