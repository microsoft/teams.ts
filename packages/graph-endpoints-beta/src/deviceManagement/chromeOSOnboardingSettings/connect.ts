import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/chromeOSOnboardingSettings/connect': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/connect',
    'post'
  >;
}

/**
 * `POST /deviceManagement/chromeOSOnboardingSettings/connect`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/connect']['body'],
  params?: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/connect']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/connect']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/chromeOSOnboardingSettings/connect',
    paramDefs: [],
    params,
    body,
  };
}
