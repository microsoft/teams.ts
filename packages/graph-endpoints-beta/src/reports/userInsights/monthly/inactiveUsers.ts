import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/inactiveUsers': Operation<
    '/reports/userInsights/monthly/inactiveUsers',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}': Operation<
    '/reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/inactiveUsers`
 *
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsers']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/inactiveUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/inactiveUsers',
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
 * `GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'monthlyInactiveUsersMetric-id', in: 'path' },
    ],
    params,
  };
}
