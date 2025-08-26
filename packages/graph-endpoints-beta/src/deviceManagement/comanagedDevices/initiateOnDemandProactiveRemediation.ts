import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
 *
 * Perform On Demand Proactive Remediation
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
