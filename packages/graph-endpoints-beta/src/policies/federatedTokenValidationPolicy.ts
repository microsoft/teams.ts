import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'delete'
  >;
  'GET /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'get'
  >;
  'PATCH /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/federatedTokenValidationPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/federatedTokenValidationPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/federatedTokenValidationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/federatedTokenValidationPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/federatedTokenValidationPolicy`
 *
 * Read the properties and relationships of a federatedTokenValidationPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/federatedTokenValidationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/federatedTokenValidationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/federatedTokenValidationPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/federatedTokenValidationPolicy`
 *
 * Update the properties of a federatedTokenValidationPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/federatedTokenValidationPolicy']['body'],
  params?: IEndpoints['PATCH /policies/federatedTokenValidationPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/federatedTokenValidationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/federatedTokenValidationPolicy',
    paramDefs: [],
    params,
    body,
  };
}
