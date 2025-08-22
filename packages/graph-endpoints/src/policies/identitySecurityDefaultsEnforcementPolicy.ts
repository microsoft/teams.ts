import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'delete'
  >;
  'GET /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'get'
  >;
  'PATCH /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/identitySecurityDefaultsEnforcementPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/identitySecurityDefaultsEnforcementPolicy']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/identitySecurityDefaultsEnforcementPolicy']['response']
> {
  return {
    method: 'delete',
    path: '/policies/identitySecurityDefaultsEnforcementPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/identitySecurityDefaultsEnforcementPolicy`
 *
 * Retrieve the properties of an identitySecurityDefaultsEnforcementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/identitySecurityDefaultsEnforcementPolicy']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/identitySecurityDefaultsEnforcementPolicy']['response']
> {
  return {
    method: 'get',
    path: '/policies/identitySecurityDefaultsEnforcementPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/identitySecurityDefaultsEnforcementPolicy`
 *
 * Update the properties of an identitySecurityDefaultsEnforcementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/identitySecurityDefaultsEnforcementPolicy']['body'],
  params?: IEndpoints['PATCH /policies/identitySecurityDefaultsEnforcementPolicy']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/identitySecurityDefaultsEnforcementPolicy']['response']
> {
  return {
    method: 'patch',
    path: '/policies/identitySecurityDefaultsEnforcementPolicy',
    paramDefs: [],
    params,
    body,
  };
}
