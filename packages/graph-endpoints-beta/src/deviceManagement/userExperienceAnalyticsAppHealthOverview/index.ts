export * as metricValues from './metricValues';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 * User experience analytics appHealth overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    paramDefs: [],
    params,
    body,
  };
}
