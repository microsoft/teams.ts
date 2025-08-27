import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/authentications': Operation<
    '/reports/userInsights/monthly/authentications',
    'get'
  >;
  'GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}': Operation<
    '/reports/userInsights/monthly/authentications/{authenticationsMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/authentications`
 *
 * Get a list of monthly authentications on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/monthly/authentications']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/authentications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/authentications',
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
 * `GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}`
 *
 * Insights for authentications on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/authentications/{authenticationsMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationsMetric-id', in: 'path' },
    ],
    params,
  };
}
