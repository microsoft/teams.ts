import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPolicyDevicesReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyDevicesReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPolicyDevicesReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDevicesReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDevicesReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDevicesReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicyDevicesReport',
    paramDefs: [],
    params,
    body,
  };
}
