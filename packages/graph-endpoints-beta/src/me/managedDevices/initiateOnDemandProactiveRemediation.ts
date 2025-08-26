import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
 *
 * Perform On Demand Proactive Remediation
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
