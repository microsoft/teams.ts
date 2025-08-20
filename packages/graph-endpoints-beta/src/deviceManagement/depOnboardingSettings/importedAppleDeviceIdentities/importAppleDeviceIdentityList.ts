import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}
