import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /reports/userInsights/daily/signUps': Operation<
    '/reports/userInsights/daily/signUps',
    'get'
  >;
  'GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}': Operation<
    '/reports/userInsights/daily/signUps/{userSignUpMetric-id}',
    'get'
  >;
}

/**
 * `GET /reports/userInsights/daily/signUps`
 *
 * Get a list of daily user sign-ups on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/daily/signUps']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/signUps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/signUps',
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
 * `GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}`
 *
 * Total sign-ups on apps registered in the tenant for a specified period.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/signUps/{userSignUpMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userSignUpMetric-id', in: 'path' },
    ],
    params,
  };
}
