import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory`
 *
 * User Experience Analytics Battery Health Device Runtime History
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
 *
 * User Experience Analytics Battery Health Device Runtime History
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    paramDefs: [
      { name: 'userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
    paramDefs: [],
    params,
    body,
  };
}
