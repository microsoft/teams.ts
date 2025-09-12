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
  'GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
    'get'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrength`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength']['body']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength',
    body,
  };
}

export const authenticationMethodModes = {
  /**
   * `GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes`
   *
   * Get a list of all supported authentication methods, or all supported authentication method combinations as a list of authenticationMethodModes objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes`
   *
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes',
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   * Names and descriptions of all valid authentication method modes in the system.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
    };
  },
};
