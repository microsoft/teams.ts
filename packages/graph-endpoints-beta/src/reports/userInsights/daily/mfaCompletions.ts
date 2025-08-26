import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/mfaCompletions': Operation<
    '/reports/userInsights/daily/mfaCompletions',
    'get'
  >;
  'GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}': Operation<
    '/reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/mfaCompletions`
 *
 * Get a list of daily MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/daily/mfaCompletions']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/mfaCompletions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/mfaCompletions',
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
 * `GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}`
 *
 * Insights for MFA usage on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mfaCompletionMetric-id', in: 'path' },
    ],
    params,
  };
}
