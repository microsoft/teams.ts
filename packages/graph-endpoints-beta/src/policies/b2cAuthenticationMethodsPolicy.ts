import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'delete'
  >;
  'GET /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'get'
  >;
  'PATCH /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/b2cAuthenticationMethodsPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/b2cAuthenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/b2cAuthenticationMethodsPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/b2cAuthenticationMethodsPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/b2cAuthenticationMethodsPolicy`
 *
 * Read the properties of a b2cAuthenticationMethodsPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/b2cAuthenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/b2cAuthenticationMethodsPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/b2cAuthenticationMethodsPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/b2cAuthenticationMethodsPolicy`
 *
 * Update the properties of a b2cAuthenticationMethodsPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/b2cAuthenticationMethodsPolicy']['body'],
  params?: IEndpoints['PATCH /policies/b2cAuthenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/b2cAuthenticationMethodsPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/b2cAuthenticationMethodsPolicy',
    paramDefs: [],
    params,
    body,
  };
}
