import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}
