import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthDeviceAppImpact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact`
 *
 * User Experience Analytics Battery Health Device App Impact
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
 *
 * User Experience Analytics Battery Health Device App Impact
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthDeviceAppImpact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBatteryHealthDeviceAppImpact-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
    paramDefs: [],
    params,
    body,
  };
}
