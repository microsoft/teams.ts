export * as authenticationMethodModes from './authenticationMethodModes';
export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrength': Operation<
    '/identity/conditionalAccess/authenticationStrength',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrength': Operation<
    '/identity/conditionalAccess/authenticationStrength',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength': Operation<
    '/identity/conditionalAccess/authenticationStrength',
    'patch'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrength`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrength',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength`
 *
 * Defines the authentication strength policies, valid authentication method combinations, and authentication method mode details that can be required by a conditional access policy.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrength`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength',
    paramDefs: [],
    params,
    body,
  };
}
