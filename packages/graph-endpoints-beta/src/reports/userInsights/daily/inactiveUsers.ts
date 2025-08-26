import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/inactiveUsers': Operation<
    '/reports/userInsights/daily/inactiveUsers',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}': Operation<
    '/reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/inactiveUsers`
 *
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsers']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/inactiveUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/inactiveUsers',
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
 * `GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'dailyInactiveUsersMetric-id', in: 'path' },
    ],
    params,
  };
}
