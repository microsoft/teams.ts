import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthOsPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance`
 *
 * User Experience Analytics Battery Health Os Performance
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
 *
 * User Experience Analytics Battery Health Os Performance
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthOsPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBatteryHealthOsPerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
    paramDefs: [],
    params,
    body,
  };
}
