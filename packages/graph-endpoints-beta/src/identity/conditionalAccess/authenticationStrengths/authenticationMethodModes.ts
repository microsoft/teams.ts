import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodModeDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes`
 *
 * Names and descriptions of all valid authentication method modes in the system.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
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
 * `GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 * Names and descriptions of all valid authentication method modes in the system.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodModeDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    paramDefs: [{ name: 'authenticationMethodModeDetail-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
    paramDefs: [],
    params,
    body,
  };
}
