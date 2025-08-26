import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereMetric-id', in: 'path' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices`
 *
 * The work from anywhere metric devices. Read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
 *
 * The work from anywhere metric devices. Read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereMetric-id', in: 'path' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    paramDefs: [
      { name: 'userExperienceAnalyticsWorkFromAnywhereMetric-id', in: 'path' },
      { name: 'userExperienceAnalyticsWorkFromAnywhereDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    paramDefs: [{ name: 'userExperienceAnalyticsWorkFromAnywhereMetric-id', in: 'path' }],
    params,
    body,
  };
}
