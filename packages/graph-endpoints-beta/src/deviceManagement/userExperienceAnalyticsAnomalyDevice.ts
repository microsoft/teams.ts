import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomalyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsAnomalyDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAnomalyDevice`
 *
 * The user experience analytics anomaly entity contains device details.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
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
 * `GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
 *
 * The user experience analytics anomaly entity contains device details.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsAnomalyDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsAnomalyDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAnomalyDevice`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
    paramDefs: [],
    params,
    body,
  };
}
