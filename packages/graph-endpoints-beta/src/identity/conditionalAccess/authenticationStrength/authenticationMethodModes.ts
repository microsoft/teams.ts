import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodModeDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes`
 *
 * Get a list of all supported authentication methods, or all supported authentication method combinations as a list of authenticationMethodModes objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
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
 * `GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 * Names and descriptions of all valid authentication method modes in the system.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodModeDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [{ name: 'authenticationMethodModeDetail-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
    paramDefs: [],
    params,
    body,
  };
}
