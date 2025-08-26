export * as appHealthMetrics from './appHealthMetrics';
export * as batteryHealthMetrics from './batteryHealthMetrics';
export * as bestPracticesMetrics from './bestPracticesMetrics';
export * as deviceBootPerformanceMetrics from './deviceBootPerformanceMetrics';
export * as rebootAnalyticsMetrics from './rebootAnalyticsMetrics';
export * as resourcePerformanceMetrics from './resourcePerformanceMetrics';
export * as workFromAnywhereMetrics from './workFromAnywhereMetrics';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBaselines': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines`
 *
 * User experience analytics baselines
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines',
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
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 * User experience analytics baselines
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBaseline-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBaseline-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBaselines`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBaselines']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBaselines']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBaselines']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBaselines',
    paramDefs: [],
    params,
    body,
  };
}
