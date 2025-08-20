export * as triggerDeviceScopeAction from './triggerDeviceScopeAction';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceScope': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScope',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScope': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScope',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceScope': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScope',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsDeviceScope`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScope',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsDeviceScope`
 *
 * The user experience analytics device scope entity endpoint to trigger on the service to either START or STOP computing metrics data based on a device scope configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsDeviceScope`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScope']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScope',
    paramDefs: [],
    params,
    body,
  };
}
