import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/monthly/signUps': Operation<
    '/reports/userInsights/monthly/signUps',
    'get'
  >;
  'GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}': Operation<
    '/reports/userInsights/monthly/signUps/{userSignUpMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/monthly/signUps`
 *
 * Get a list of monthly user sign-ups on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/monthly/signUps']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/signUps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/signUps',
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
 * `GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}`
 *
 * Total sign-ups on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/signUps/{userSignUpMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userSignUpMetric-id', in: 'path' },
    ],
    params,
  };
}
