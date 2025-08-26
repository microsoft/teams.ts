export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * Delete a microsoftAuthenticatorAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'microsoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods`
 *
 * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * Read the properties and relationships of a microsoftAuthenticatorAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'microsoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
