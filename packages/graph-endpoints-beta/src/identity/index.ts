export * as apiConnectors from './apiConnectors';
export * as authenticationEventsFlows from './authenticationEventsFlows';
export * as b2cUserFlows from './b2cUserFlows';
export * as b2xUserFlows from './b2xUserFlows';
export * as conditionalAccess from './conditionalAccess';
export * as customAuthenticationExtensions from './customAuthenticationExtensions';
export * as riskPrevention from './riskPrevention';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /identity': Operation<'/identity', 'get'>;
  'PATCH /identity': Operation<'/identity', 'patch'>;
  'GET /identity/authenticationEventListeners': Operation<
    '/identity/authenticationEventListeners',
    'get'
  >;
  'POST /identity/authenticationEventListeners': Operation<
    '/identity/authenticationEventListeners',
    'post'
  >;
  'GET /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'get'
  >;
  'PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'patch'
  >;
  'DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'delete'
  >;
  'GET /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'get'
  >;
  'PATCH /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'patch'
  >;
  'DELETE /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'delete'
  >;
  'GET /identity/identityProviders': Operation<'/identity/identityProviders', 'get'>;
  'POST /identity/identityProviders': Operation<'/identity/identityProviders', 'post'>;
  'GET /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'get'
  >;
  'PATCH /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'patch'
  >;
  'DELETE /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'delete'
  >;
  'GET /identity/userFlowAttributes': Operation<'/identity/userFlowAttributes', 'get'>;
  'POST /identity/userFlowAttributes': Operation<'/identity/userFlowAttributes', 'post'>;
  'GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'get'
  >;
  'PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'patch'
  >;
  'DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'delete'
  >;
  'GET /identity/userFlows': Operation<'/identity/userFlows', 'get'>;
  'POST /identity/userFlows': Operation<'/identity/userFlows', 'post'>;
  'GET /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'get'
  >;
  'PATCH /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'patch'
  >;
  'DELETE /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'delete'
  >;
}

/**
 * `GET /identity`
 *
 */
export function get(
  params?: IEndpoints['GET /identity']['parameters']
): EndpointRequest<IEndpoints['GET /identity']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity']['body']
): EndpointRequest<IEndpoints['PATCH /identity']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity',
    body,
  };
}

export const authenticationEventListeners = {
  /**
   * `GET /identity/authenticationEventListeners`
   *
   * Get a list of the authenticationEventListener objects and their properties. The following derived types are supported:
   */
  list: function list(
    params?: IEndpoints['GET /identity/authenticationEventListeners']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/authenticationEventListeners']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/authenticationEventListeners',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/authenticationEventListeners`
   *
   * Create a new authenticationEventListener object. You can create one of the following subtypes that are derived from authenticationEventListener.
   */
  create: function create(
    body: IEndpoints['POST /identity/authenticationEventListeners']['body']
  ): EndpointRequest<IEndpoints['POST /identity/authenticationEventListeners']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/authenticationEventListeners',
      body,
    };
  },
  /**
   * `GET /identity/authenticationEventListeners/{authenticationEventListener-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationEventListener-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}`
   *
   * Update the properties of an authenticationEventListener object. You must specify the @odata.type property and the value of the authenticationEventListener object type to update. The following derived types are currently supported.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['body'],
    params?: IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
      paramDefs: {
        path: ['authenticationEventListener-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}`
   *
   * Delete an authenticationEventListener object. The following derived types are currently supported.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationEventListener-id'],
      },
      params,
    };
  },
};

export const continuousAccessEvaluationPolicy = {
  /**
   * `GET /identity/continuousAccessEvaluationPolicy`
   *
   * Read the properties and relationships of a continuousAccessEvaluationPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/continuousAccessEvaluationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/continuousAccessEvaluationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/continuousAccessEvaluationPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/continuousAccessEvaluationPolicy`
   *
   * Update the properties of a continuousAccessEvaluationPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/continuousAccessEvaluationPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /identity/continuousAccessEvaluationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/continuousAccessEvaluationPolicy',
      body,
    };
  },
  /**
   * `DELETE /identity/continuousAccessEvaluationPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/continuousAccessEvaluationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /identity/continuousAccessEvaluationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/continuousAccessEvaluationPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const identityProviders = {
  /**
   * `GET /identity/identityProviders`
   *
   * Get a collection of identity provider resources that are configured for a tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra External ID, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an oidcIdentityProvider resource. In Azure AD B2C, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
   */
  list: function list(
    params?: IEndpoints['GET /identity/identityProviders']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/identityProviders']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/identityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/identityProviders`
   *
   * Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can create a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can create a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
   */
  create: function create(
    body: IEndpoints['POST /identity/identityProviders']['body']
  ): EndpointRequest<IEndpoints['POST /identity/identityProviders']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/identityProviders',
      body,
    };
  },
  /**
   * `GET /identity/identityProviders/{identityProviderBase-id}`
   *
   * Get the properties and relationships of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can get a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), builtinIdentityProvider, or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
   */
  get: function get(
    params?: IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/identityProviders/{identityProviderBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityProviderBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/identityProviders/{identityProviderBase-id}`
   *
   * Update the properties of the specified external identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can update a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can update a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['body'],
    params?: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/identityProviders/{identityProviderBase-id}',
      paramDefs: {
        path: ['identityProviderBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/identityProviders/{identityProviderBase-id}`
   *
   * Delete an identity provider resource that is of the type specified by the id in the request. Among the types of providers derived from identityProviderBase, you can currently delete a socialIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently delete a socialIdentityProvider, openIdConnectIdentityProvider, or an appleManagedIdentityProvider resource.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/identityProviders/{identityProviderBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityProviderBase-id'],
      },
      params,
    };
  },
};

export const userFlowAttributes = {
  /**
   * `GET /identity/userFlowAttributes`
   *
   * Retrieve a list of identityUserFlowAttribute objects.
   */
  list: function list(
    params?: IEndpoints['GET /identity/userFlowAttributes']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/userFlowAttributes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/userFlowAttributes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/userFlowAttributes`
   *
   * Create a new custom identityUserFlowAttribute object.
   */
  create: function create(
    body: IEndpoints['POST /identity/userFlowAttributes']['body']
  ): EndpointRequest<IEndpoints['POST /identity/userFlowAttributes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/userFlowAttributes',
      body,
    };
  },
  /**
   * `GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
   *
   * Retrieve the properties and relationships of a identityUserFlowAttribute object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityUserFlowAttribute-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
   *
   * Update the properties of a custom identityUserFlowAttribute object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['body'],
    params?: IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
      paramDefs: {
        path: ['identityUserFlowAttribute-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
   *
   * Delete a custom identityUserFlowAttribute.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityUserFlowAttribute-id'],
      },
      params,
    };
  },
};

export const userFlows = {
  /**
   * `GET /identity/userFlows`
   *
   * Retrieve a list of userflows.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identity/userFlows']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/userFlows']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/userFlows',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/userFlows`
   *
   * Create a new userFlow object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identity/userFlows']['body']
  ): EndpointRequest<IEndpoints['POST /identity/userFlows']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/userFlows',
      body,
    };
  },
  /**
   * `GET /identity/userFlows/{identityUserFlow-id}`
   *
   * Retrieve the properties and associations for an userFlow object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identity/userFlows/{identityUserFlow-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/userFlows/{identityUserFlow-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/userFlows/{identityUserFlow-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityUserFlow-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/userFlows/{identityUserFlow-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['body'],
    params?: IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/userFlows/{identityUserFlow-id}',
      paramDefs: {
        path: ['identityUserFlow-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/userFlows/{identityUserFlow-id}`
   *
   * Delete an existing userFlow object.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/userFlows/{identityUserFlow-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /identity/userFlows/{identityUserFlow-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/userFlows/{identityUserFlow-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityUserFlow-id'],
      },
      params,
    };
  },
};
