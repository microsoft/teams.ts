import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/requests': Operation<
    '/reports/userInsights/monthly/requests',
    'get'
  >;
  'GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}': Operation<
    '/reports/userInsights/monthly/requests/{userRequestsMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/requests`
 *
 * Get a list of monthly user requests on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/monthly/requests']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/requests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/requests',
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
 * `GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}`
 *
 * Insights for all user requests on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/requests/{userRequestsMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userRequestsMetric-id', in: 'path' },
    ],
    params,
  };
}
