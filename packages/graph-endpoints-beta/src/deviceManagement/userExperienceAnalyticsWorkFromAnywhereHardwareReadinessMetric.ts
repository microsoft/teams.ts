import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
 *
 * User experience analytics work from anywhere hardware readiness metrics.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    paramDefs: [],
    params,
    body,
  };
}
