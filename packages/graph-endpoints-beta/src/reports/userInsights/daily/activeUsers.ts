import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/activeUsers': Operation<
    '/reports/userInsights/daily/activeUsers',
    'get'
  >;
  'GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}': Operation<
    '/reports/userInsights/daily/activeUsers/{activeUsersMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/activeUsers`
 *
 * Get a list of daily active users on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/daily/activeUsers']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/activeUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/activeUsers',
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
 * `GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}`
 *
 * Insights for active users on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/activeUsers/{activeUsersMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activeUsersMetric-id', in: 'path' },
    ],
    params,
  };
}
