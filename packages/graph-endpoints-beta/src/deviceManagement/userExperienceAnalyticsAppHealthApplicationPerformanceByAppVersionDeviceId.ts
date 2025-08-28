import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId`
 *
 * User experience analytics appHealth Application Performance by App Version Device Id
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
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
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
 *
 * User experience analytics appHealth Application Performance by App Version Device Id
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    paramDefs: [
      { name: 'userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
    paramDefs: [],
    params,
    body,
  };
}
