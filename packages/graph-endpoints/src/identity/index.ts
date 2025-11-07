export * as apiConnectors from './apiConnectors';
export * as authenticationEventsFlows from './authenticationEventsFlows';
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
}

/**
 * `GET /identity`
 *
 */
export function get(
  params?: IEndpoints['GET /identity']['parameters']
): EndpointRequest<IEndpoints['GET /identity']['response']> {
  return {
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
      method: 'post',
      path: '/identity/authenticationEventListeners',
      body,
    };
  },
  /**
   * `GET /identity/authenticationEventListeners/{authenticationEventListener-id}`
   *
   * Read the properties and relationships of an authenticationEventListener object. The @odata.type property in the response object indicates the type of the authenticationEventListener object. The following derived types are currently supported.
   */
  get: function get(
    params?: IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
  > {
    return {
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

export const identityProviders = {
  /**
   * `GET /identity/identityProviders`
   *
   * Get a collection of identity provider resources that are configured for a tenant, and that are derived from identityProviderBase. For a Microsoft Entra tenant, the providers can be socialIdentityProviders or builtinIdentityProviders objects. For an Azure AD B2C, the providers can be socialIdentityProvider, or appleManagedIdentityProvider objects.
   */
  list: function list(
    params?: IEndpoints['GET /identity/identityProviders']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/identityProviders']['response']> {
    return {
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
   * Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, you can currently create a socialIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently create a socialIdentityProvider, or an appleManagedIdentityProvider resource.
   */
  create: function create(
    body: IEndpoints['POST /identity/identityProviders']['body']
  ): EndpointRequest<IEndpoints['POST /identity/identityProviders']['response']> {
    return {
      method: 'post',
      path: '/identity/identityProviders',
      body,
    };
  },
  /**
   * `GET /identity/identityProviders/{identityProviderBase-id}`
   *
   * Get the properties and relationships of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently get a socialIdentityProvider or a builtinIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently get a socialIdentityProvider, or an appleManagedIdentityProvider resource.
   */
  get: function get(
    params?: IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
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
   * Update the properties of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently update a socialIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently update a socialIdentityProvider, or an appleManagedIdentityProvider resource.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['body'],
    params?: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
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
   * Delete an identity provider resource that is of the type specified by the id in the request. Among the types of providers derived from identityProviderBase, you can currently delete a socialIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently delete a socialIdentityProvider, or an appleManagedIdentityProvider resource.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['response']
  > {
    return {
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
