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
  'GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
    'get'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrengths`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths']['body']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrengths',
    body,
  };
}

export const authenticationMethodModes = {
  /**
   * `GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes`
   *
   * Names and descriptions of all valid authentication method modes in the system.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes',
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   * Names and descriptions of all valid authentication method modes in the system.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/conditionalAccess/authenticationStrengths/authenticationMethodModes/{authenticationMethodModeDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationMethodModeDetail-id'],
      },
      params,
    };
  },
};
