import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsOverview']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsOverview',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsOverview`
 *
 * User experience analytics overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsOverview']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsOverview`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsOverview']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsOverview',
    paramDefs: [],
    params,
    body,
  };
}
