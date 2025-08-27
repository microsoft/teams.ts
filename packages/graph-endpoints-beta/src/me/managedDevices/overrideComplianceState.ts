import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/me/managedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/overrideComplianceState`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/overrideComplianceState',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
