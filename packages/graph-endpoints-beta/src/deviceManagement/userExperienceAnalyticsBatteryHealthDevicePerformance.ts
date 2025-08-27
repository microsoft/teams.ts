import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthDevicePerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance`
 *
 * User Experience Analytics Battery Health Device Performance
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
 *
 * User Experience Analytics Battery Health Device Performance
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthDevicePerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBatteryHealthDevicePerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
    paramDefs: [],
    params,
    body,
  };
}
