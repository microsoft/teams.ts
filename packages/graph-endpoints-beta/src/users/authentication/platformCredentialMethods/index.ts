export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/platformCredentialMethods': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Delete a platformCredentialAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'platformCredentialAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/platformCredentialMethods`
 *
 * Represents a platform credential instance registered to a user on Mac OS.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/platformCredentialMethods',
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
 * `GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Represents a platform credential instance registered to a user on Mac OS.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'platformCredentialAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
