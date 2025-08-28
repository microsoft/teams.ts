import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
 *
 * User Experience Analytics Battery Health Capacity Details
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    paramDefs: [],
    params,
    body,
  };
}
