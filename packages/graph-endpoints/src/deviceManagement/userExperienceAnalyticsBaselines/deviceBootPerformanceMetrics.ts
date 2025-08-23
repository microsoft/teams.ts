import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics',
    'get'
  >;
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics`
 *
 * The scores and insights for the device boot performance metrics.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}
