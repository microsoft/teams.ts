export * as combinationConfigurations from './combinationConfigurations';
export * as updateAllowedCombinations from './updateAllowedCombinations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/policies': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength/policies`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies',
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
 * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrength/policies`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrength/policies',
    paramDefs: [],
    params,
    body,
  };
}
