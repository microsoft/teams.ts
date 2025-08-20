import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics',
    'get'
  >;
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics`
 *
 * The scores and insights for the best practices metrics.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}
