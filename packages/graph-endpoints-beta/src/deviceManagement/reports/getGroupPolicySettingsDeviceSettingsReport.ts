import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport': Operation<
    '/deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
