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
  'POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction',
    'post'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsDeviceScope`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScope']['body']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScope',
    body,
  };
}

export const triggerDeviceScopeAction = {
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction',
      body,
    };
  },
};
