import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScope/triggerDeviceScopeAction',
    paramDefs: [],
    params,
    body,
  };
}
