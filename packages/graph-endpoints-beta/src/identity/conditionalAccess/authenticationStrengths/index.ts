export * as authenticationMethodModes from './authenticationMethodModes';
export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrengths': Operation<
    '/identity/conditionalAccess/authenticationStrengths',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths': Operation<
    '/identity/conditionalAccess/authenticationStrengths',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths': Operation<
    '/identity/conditionalAccess/authenticationStrengths',
    'patch'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrengths`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrengths',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrengths`
 *
 * DEPRECATED. See the authenticationStrength relationship instead.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrengths`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrengths',
    paramDefs: [],
    params,
    body,
  };
}
