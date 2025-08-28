import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device`
 *
 * The registered device on which Microsoft Authenticator resides. This property is null if the device isn&#x27;t registered for passwordless Phone Sign-In.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'microsoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
