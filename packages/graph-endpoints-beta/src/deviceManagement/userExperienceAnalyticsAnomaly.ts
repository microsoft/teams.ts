import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomaly': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomaly': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsAnomaly-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAnomaly`
 *
 * The user experience analytics anomaly entity contains anomaly details.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomaly',
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
 * `GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
 *
 * The user experience analytics anomaly entity contains anomaly details.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsAnomaly-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsAnomaly-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAnomaly`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomaly']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomaly']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomaly']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAnomaly',
    paramDefs: [],
    params,
    body,
  };
}
