import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
 *
 * User Experience Analytics Battery Health Runtime Details
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    paramDefs: [],
    params,
    body,
  };
}
