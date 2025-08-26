export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    'get'
  >;
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo`
 *
 * Assign the hardware OATH token to a user.
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}
