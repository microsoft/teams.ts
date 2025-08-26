import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device`
 *
 */
export function get(
  params?: IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
