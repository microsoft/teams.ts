import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/fido2Methods': Operation<'/me/authentication/fido2Methods', 'get'>;
  'GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fido2AuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/fido2Methods`
 *
 * Retrieve a list of a user&#x27;s FIDO2 security key authentication method objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/fido2Methods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/fido2Methods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/fido2Methods',
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
 * `GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
 *
 * Retrieve a user&#x27;s single FIDO2 security key authentication method object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fido2AuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
