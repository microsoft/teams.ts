import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsAnomalyCorrelationGroupOverview-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview`
 *
 * The user experience analytics anomaly correlation group overview entity contains the information for each correlation group of an anomaly.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
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
 * `GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
 *
 * The user experience analytics anomaly correlation group overview entity contains the information for each correlation group of an anomaly.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsAnomalyCorrelationGroupOverview-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsAnomalyCorrelationGroupOverview-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
    paramDefs: [],
    params,
    body,
  };
}
