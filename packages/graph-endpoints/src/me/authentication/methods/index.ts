export * as resetPassword from './resetPassword';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/methods': Operation<'/me/authentication/methods', 'get'>;
  'GET /me/authentication/methods/{authenticationMethod-id}': Operation<
    '/me/authentication/methods/{authenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/methods/{authenticationMethod-id}': Operation<
    '/me/authentication/methods/{authenticationMethod-id}',
    'patch'
  >;
  'POST /me/authentication/methods': Operation<'/me/authentication/methods', 'post'>;
}

/**
 * `GET /me/authentication/methods`
 *
 * Retrieve a list of authentication methods registered to a user. The authentication methods are defined by the types derived from the authenticationMethod resource type, and only the methods supported on this API version. See Microsoft Entra authentication methods API overview for a list of currently supported methods. We don&#x27;t recommend using the authentication methods APIs for scenarios where you need to iterate over your entire user population for auditing or security check purposes. For these types of scenarios, we recommend using the authentication method registration and usage reporting APIs.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/methods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/methods',
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
 * `GET /me/authentication/methods/{authenticationMethod-id}`
 *
 * Retrieve the properties and relationships of an authenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/methods/{authenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/methods/{authenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/authentication/methods/{authenticationMethod-id}',
    paramDefs: [{ name: 'authenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/authentication/methods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/methods']['body'],
  params?: IEndpoints['POST /me/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/methods']['response']> {
  return {
    method: 'post',
    path: '/me/authentication/methods',
    paramDefs: [],
    params,
    body,
  };
}
