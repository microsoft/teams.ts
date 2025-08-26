import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/authentications': Operation<
    '/reports/userInsights/daily/authentications',
    'get'
  >;
  'GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}': Operation<
    '/reports/userInsights/daily/authentications/{authenticationsMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/authentications`
 *
 * Get a list of daily authentications on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/daily/authentications']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/authentications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/authentications',
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
 * `GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}`
 *
 * Insights for authentications on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/authentications/{authenticationsMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationsMetric-id', in: 'path' },
    ],
    params,
  };
}
