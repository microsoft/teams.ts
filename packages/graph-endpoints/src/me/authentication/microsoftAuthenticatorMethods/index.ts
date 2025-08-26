export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/microsoftAuthenticatorMethods': Operation<
    '/me/authentication/microsoftAuthenticatorMethods',
    'get'
  >;
  'GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/microsoftAuthenticatorMethods`
 *
 * The details of the Microsoft Authenticator app registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/microsoftAuthenticatorMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * The details of the Microsoft Authenticator app registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
