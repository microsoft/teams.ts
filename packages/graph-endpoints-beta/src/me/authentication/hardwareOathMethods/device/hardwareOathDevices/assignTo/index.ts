export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    'get'
  >;
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo`
 *
 * Assign the hardware OATH token to a user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}
