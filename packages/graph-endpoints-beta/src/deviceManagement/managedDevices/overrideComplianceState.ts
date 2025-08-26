import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
