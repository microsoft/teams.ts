import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport': Operation<
    '/deviceManagement/reports/getDeviceManagementIntentSettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceManagementIntentSettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
