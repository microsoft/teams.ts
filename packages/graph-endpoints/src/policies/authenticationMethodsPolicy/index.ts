export * as authenticationMethodConfigurations from './authenticationMethodConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'delete'
  >;
  'GET /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'get'
  >;
  'PATCH /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/authenticationMethodsPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/authenticationMethodsPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/authenticationMethodsPolicy`
 *
 * Read the properties and relationships of an authenticationMethodsPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/authenticationMethodsPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authenticationMethodsPolicy`
 *
 * Update the properties of an authenticationMethodsPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationMethodsPolicy']['body'],
  params?: IEndpoints['PATCH /policies/authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/authenticationMethodsPolicy',
    paramDefs: [],
    params,
    body,
  };
}
