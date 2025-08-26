import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/summary': Operation<
    '/reports/userInsights/monthly/summary',
    'get'
  >;
  'GET /reports/userInsights/monthly/summary/{insightSummary-id}': Operation<
    '/reports/userInsights/monthly/summary/{insightSummary-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/summary`
 *
 * Get a list of monthly  insightSummary objects on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/summary']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/summary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/summary',
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
 * `GET /reports/userInsights/monthly/summary/{insightSummary-id}`
 *
 * Summary of all usage insights on apps registered in the tenant for a specified period.
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/monthly/summary/{insightSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/summary/{insightSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/summary/{insightSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'insightSummary-id', in: 'path' },
    ],
    params,
  };
}
