import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues`
 *
 * The metric values for the user experience analytics category. Read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
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
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
 *
 * The metric values for the user experience analytics category. Read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsMetric-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
    paramDefs: [],
    params,
    body,
  };
}
