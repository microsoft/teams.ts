export * as languages from './languages';
export * as userAttributeAssignments from './userAttributeAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    'delete'
  >;
  'GET /identity/b2cUserFlows': Operation<'/identity/b2cUserFlows', 'get'>;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    'get'
  >;
  'PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    'patch'
  >;
  'POST /identity/b2cUserFlows': Operation<'/identity/b2cUserFlows', 'post'>;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders',
    'get'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders',
    'get'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}',
    'get'
  >;
}

/**
 * `DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}`
 *
 * Delete a b2cIdentityUserFlow object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2cIdentityUserFlow-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows`
 *
 * Retrieve a list of b2cIdentityUserFlow objects.
 */
export function list(
  params?: IEndpoints['GET /identity/b2cUserFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2cUserFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}`
 *
 * Retrieve the properties and relationships of a b2cUserFlow object.
 */
export function get(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}`
 *
 * Update the properties of a b2cIdentityUserFlow object.
 */
export function update(
  body: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/b2cUserFlows`
 *
 * Create a new b2cIdentityUserFlow object.
 */
export function create(
  body: IEndpoints['POST /identity/b2cUserFlows']['body']
): EndpointRequest<IEndpoints['POST /identity/b2cUserFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/b2cUserFlows',
    body,
  };
}

export const identityProviders = {
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders`
   *
   * Get the identity providers in a b2cIdentityUserFlow object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2cIdentityUserFlow-id'],
      },
      params,
    };
  },
};

export const userFlowIdentityProviders = {
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders`
   *
   * The identity providers included in the user flow.
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2cIdentityUserFlow-id'],
      },
      params,
    };
  },
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}`
   *
   * The identity providers included in the user flow.
   */
  get: function get(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['b2cIdentityUserFlow-id', 'identityProviderBase-id'],
      },
      params,
    };
  },
};
