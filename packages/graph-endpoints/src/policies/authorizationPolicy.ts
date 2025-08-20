import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'delete'>;
  'GET /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'get'>;
  'PATCH /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'patch'>;
}

/**
 * `DELETE /policies/authorizationPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/authorizationPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/authorizationPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy`
 *
 * Retrieve the properties of an authorizationPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authorizationPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/authorizationPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authorizationPolicy`
 *
 * Update the properties of an authorizationPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/authorizationPolicy']['body'],
  params?: IEndpoints['PATCH /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/authorizationPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/authorizationPolicy',
    paramDefs: [],
    params,
    body,
  };
}
