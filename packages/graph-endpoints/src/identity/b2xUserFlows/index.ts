export * as apiConnectorConfiguration from './apiConnectorConfiguration';
export * as languages from './languages';
export * as userAttributeAssignments from './userAttributeAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows': Operation<'/identity/b2xUserFlows', 'get'>;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows': Operation<'/identity/b2xUserFlows', 'post'>;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders',
    'get'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 * Delete a b2xIdentityUserFlow object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows`
 *
 * Retrieve a list of b2xIdentityUserFlow objects.
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2xUserFlows']['response']> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 * Retrieve the properties and relationships of a b2xIdentityUserFlow object.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows`
 *
 * Create a new b2xIdentityUserFlow object.
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows']['body']
): EndpointRequest<IEndpoints['POST /identity/b2xUserFlows']['response']> {
  return {
    method: 'post',
    path: '/identity/b2xUserFlows',
    body,
  };
}

export const identityProviders = {
  /**
   * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders`
   *
   * Get the identity providers in a b2xIdentityUserFlow object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders']['response']
  > {
    return {
      method: 'get',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2xIdentityUserFlow-id'],
      },
      params,
    };
  },
  /**
   * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}`
   *
   * The identity providers included in the user flow.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['b2xIdentityUserFlow-id', 'identityProvider-id'],
      },
      params,
    };
  },
};

export const userFlowIdentityProviders = {
  /**
   * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders`
   *
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders']['response']
  > {
    return {
      method: 'get',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2xIdentityUserFlow-id'],
      },
      params,
    };
  },
};
