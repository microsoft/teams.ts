import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/summary': Operation<
    '/reports/userInsights/daily/summary',
    'get'
  >;
  'GET /reports/userInsights/daily/summary/{insightSummary-id}': Operation<
    '/reports/userInsights/daily/summary/{insightSummary-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/summary`
 *
 * Summary of all usage insights on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/summary']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/summary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/summary',
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
 * `GET /reports/userInsights/daily/summary/{insightSummary-id}`
 *
 * Summary of all usage insights on apps registered in the tenant for a specified period.
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/daily/summary/{insightSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/summary/{insightSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/summary/{insightSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'insightSummary-id', in: 'path' },
    ],
    params,
  };
}
