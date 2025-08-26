import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction',
    paramDefs: [{ name: 'userExperienceAnalyticsDeviceScope-id', in: 'path' }],
    params,
    body,
  };
}
