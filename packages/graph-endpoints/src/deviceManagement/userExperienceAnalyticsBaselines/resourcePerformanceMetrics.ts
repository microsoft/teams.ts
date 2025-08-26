import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics',
    'get'
  >;
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics`
 *
 * The scores and insights for the resource performance metrics.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}
