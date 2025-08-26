import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles': Operation<
    '/deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles',
    paramDefs: [],
    params,
    body,
  };
}
