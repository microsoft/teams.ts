import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
 *
 * Perform On Demand Proactive Remediation
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
