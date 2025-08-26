import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/fido2Methods': Operation<
    '/users/{user-id}/authentication/fido2Methods',
    'get'
  >;
  'GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
 *
 * Deletes a user&#x27;s FIDO2 security key authentication method object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'fido2AuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/fido2Methods`
 *
 * Represents the FIDO2 security keys registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/fido2Methods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/fido2Methods']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/fido2Methods',
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
 * `GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
 *
 * Represents the FIDO2 security keys registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'fido2AuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
