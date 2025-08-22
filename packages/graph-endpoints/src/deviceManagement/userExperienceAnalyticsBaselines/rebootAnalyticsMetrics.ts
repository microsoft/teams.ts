import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics',
    'get'
  >;
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics`
 *
 * The scores and insights for the reboot analytics metrics.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}
