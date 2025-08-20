import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/chromeOSOnboardingSettings/disconnect': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/disconnect',
    'post'
  >;
}

/**
 * `POST /deviceManagement/chromeOSOnboardingSettings/disconnect`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/disconnect']['body'],
  params?: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/disconnect']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/disconnect']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/chromeOSOnboardingSettings/disconnect',
    paramDefs: [],
    params,
    body,
  };
}
