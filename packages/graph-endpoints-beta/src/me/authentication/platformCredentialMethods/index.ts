export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/platformCredentialMethods': Operation<
    '/me/authentication/platformCredentialMethods',
    'get'
  >;
  'GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'platformCredentialAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/platformCredentialMethods`
 *
 * Get a list of the platformCredentialAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/platformCredentialMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/platformCredentialMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/platformCredentialMethods',
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
 * `GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Read the properties and relationships of a platformCredentialAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'platformCredentialAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
