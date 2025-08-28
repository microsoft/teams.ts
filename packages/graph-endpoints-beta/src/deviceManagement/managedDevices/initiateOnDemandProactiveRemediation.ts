import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
 *
 * Perform On Demand Proactive Remediation
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
