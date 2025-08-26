import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'delete'
  >;
  'GET /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'get'
  >;
  'PATCH /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/authenticationFlowsPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationFlowsPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/authenticationFlowsPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/authenticationFlowsPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/authenticationFlowsPolicy`
 *
 * Read the properties and relationships of an authenticationFlowsPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationFlowsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authenticationFlowsPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/authenticationFlowsPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authenticationFlowsPolicy`
 *
 * Update the selfServiceSignUp property of an authenticationFlowsPolicy object. The properties id, type, and description cannot be modified.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationFlowsPolicy']['body'],
  params?: IEndpoints['PATCH /policies/authenticationFlowsPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/authenticationFlowsPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/authenticationFlowsPolicy',
    paramDefs: [],
    params,
    body,
  };
}
