export * as administrativeUnits from './administrativeUnits';
export * as customSecurityAttributeDefinitions from './customSecurityAttributeDefinitions';
export * as deletedItems from './deletedItems';
export * as publicKeyInfrastructure from './publicKeyInfrastructure';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /directory': Operation<'/directory', 'get'>;
  'PATCH /directory': Operation<'/directory', 'patch'>;
  'GET /directory/attributeSets': Operation<'/directory/attributeSets', 'get'>;
  'POST /directory/attributeSets': Operation<'/directory/attributeSets', 'post'>;
  'GET /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'get'
  >;
  'PATCH /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'patch'
  >;
  'DELETE /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'delete'
  >;
  'GET /directory/deviceLocalCredentials': Operation<'/directory/deviceLocalCredentials', 'get'>;
  'POST /directory/deviceLocalCredentials': Operation<'/directory/deviceLocalCredentials', 'post'>;
  'GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'get'
  >;
  'PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'patch'
  >;
  'DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'delete'
  >;
  'GET /directory/federationConfigurations': Operation<
    '/directory/federationConfigurations',
    'get'
  >;
  'POST /directory/federationConfigurations': Operation<
    '/directory/federationConfigurations',
    'post'
  >;
  'GET /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'get'
  >;
  'PATCH /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'patch'
  >;
  'DELETE /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'delete'
  >;
  'GET /directory/onPremisesSynchronization': Operation<
    '/directory/onPremisesSynchronization',
    'get'
  >;
  'POST /directory/onPremisesSynchronization': Operation<
    '/directory/onPremisesSynchronization',
    'post'
  >;
  'GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'get'
  >;
  'PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'patch'
  >;
  'DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'delete'
  >;
  'GET /directory/subscriptions': Operation<'/directory/subscriptions', 'get'>;
  'POST /directory/subscriptions': Operation<'/directory/subscriptions', 'post'>;
  'GET /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'get'
  >;
  'PATCH /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'patch'
  >;
  'DELETE /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'delete'
  >;
}

/**
 * `GET /directory`
 *
 */
export function get(
  params?: IEndpoints['GET /directory']['parameters']
): EndpointRequest<IEndpoints['GET /directory']['response']> {
  return {
    method: 'get',
    path: '/directory',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory']['body']
): EndpointRequest<IEndpoints['PATCH /directory']['response']> {
  return {
    method: 'patch',
    path: '/directory',
    body,
  };
}

export const attributeSets = {
  /**
   * `GET /directory/attributeSets`
   *
   * Get a list of the attributeSet objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /directory/attributeSets']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/attributeSets']['response']> {
    return {
      method: 'get',
      path: '/directory/attributeSets',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/attributeSets`
   *
   * Create a new attributeSet object.
   */
  create: function create(
    body: IEndpoints['POST /directory/attributeSets']['body']
  ): EndpointRequest<IEndpoints['POST /directory/attributeSets']['response']> {
    return {
      method: 'post',
      path: '/directory/attributeSets',
      body,
    };
  },
  /**
   * `GET /directory/attributeSets/{attributeSet-id}`
   *
   * Read the properties and relationships of an attributeSet object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/attributeSets/{attributeSet-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/attributeSets/{attributeSet-id}']['response']> {
    return {
      method: 'get',
      path: '/directory/attributeSets/{attributeSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['attributeSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/attributeSets/{attributeSet-id}`
   *
   * Update the properties of an attributeSet object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['body'],
    params?: IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['response']> {
    return {
      method: 'patch',
      path: '/directory/attributeSets/{attributeSet-id}',
      paramDefs: {
        path: ['attributeSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/attributeSets/{attributeSet-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/attributeSets/{attributeSet-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /directory/attributeSets/{attributeSet-id}']['response']> {
    return {
      method: 'delete',
      path: '/directory/attributeSets/{attributeSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['attributeSet-id'],
      },
      params,
    };
  },
};

export const deviceLocalCredentials = {
  /**
   * `GET /directory/deviceLocalCredentials`
   *
   * Get a list of the deviceLocalCredentialInfo objects and their properties, excluding the credentials property.
   */
  list: function list(
    params?: IEndpoints['GET /directory/deviceLocalCredentials']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/deviceLocalCredentials']['response']> {
    return {
      method: 'get',
      path: '/directory/deviceLocalCredentials',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/deviceLocalCredentials`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/deviceLocalCredentials']['body']
  ): EndpointRequest<IEndpoints['POST /directory/deviceLocalCredentials']['response']> {
    return {
      method: 'post',
      path: '/directory/deviceLocalCredentials',
      body,
    };
  },
  /**
   * `GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
   *
   * Retrieve the properties of a deviceLocalCredentialInfo for a specified device object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceLocalCredentialInfo-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['body'],
    params?: IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
      paramDefs: {
        path: ['deviceLocalCredentialInfo-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceLocalCredentialInfo-id'],
      },
      params,
    };
  },
};

export const federationConfigurations = {
  /**
   * `GET /directory/federationConfigurations`
   *
   * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
   */
  list: function list(
    params?: IEndpoints['GET /directory/federationConfigurations']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/federationConfigurations']['response']> {
    return {
      method: 'get',
      path: '/directory/federationConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/federationConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/federationConfigurations']['body']
  ): EndpointRequest<IEndpoints['POST /directory/federationConfigurations']['response']> {
    return {
      method: 'post',
      path: '/directory/federationConfigurations',
      body,
    };
  },
  /**
   * `GET /directory/federationConfigurations/{identityProviderBase-id}`
   *
   * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
   */
  get: function get(
    params?: IEndpoints['GET /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/federationConfigurations/{identityProviderBase-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directory/federationConfigurations/{identityProviderBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityProviderBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/federationConfigurations/{identityProviderBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['body'],
    params?: IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directory/federationConfigurations/{identityProviderBase-id}',
      paramDefs: {
        path: ['identityProviderBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/federationConfigurations/{identityProviderBase-id}`
   *
   * Delete a samlOrWsFedExternalDomainFederation object.
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/federationConfigurations/{identityProviderBase-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directory/federationConfigurations/{identityProviderBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityProviderBase-id'],
      },
      params,
    };
  },
};

export const onPremisesSynchronization = {
  /**
   * `GET /directory/onPremisesSynchronization`
   *
   * Read the properties and relationships of an onPremisesDirectorySynchronization object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/onPremisesSynchronization']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/onPremisesSynchronization']['response']> {
    return {
      method: 'get',
      path: '/directory/onPremisesSynchronization',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/onPremisesSynchronization`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/onPremisesSynchronization']['body']
  ): EndpointRequest<IEndpoints['POST /directory/onPremisesSynchronization']['response']> {
    return {
      method: 'post',
      path: '/directory/onPremisesSynchronization',
      body,
    };
  },
  /**
   * `GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
   *
   * Read the properties and relationships of an onPremisesDirectorySynchronization object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onPremisesDirectorySynchronization-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
   *
   * Update the properties of an onPremisesDirectorySynchronization object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['body'],
    params?: IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
      paramDefs: {
        path: ['onPremisesDirectorySynchronization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onPremisesDirectorySynchronization-id'],
      },
      params,
    };
  },
};

export const subscriptions = {
  /**
   * `GET /directory/subscriptions`
   *
   * Get the list of commercial subscriptions that an organization acquired.
   */
  list: function list(
    params?: IEndpoints['GET /directory/subscriptions']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/subscriptions']['response']> {
    return {
      method: 'get',
      path: '/directory/subscriptions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/subscriptions`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/subscriptions']['body']
  ): EndpointRequest<IEndpoints['POST /directory/subscriptions']['response']> {
    return {
      method: 'post',
      path: '/directory/subscriptions',
      body,
    };
  },
  /**
   * `GET /directory/subscriptions/{companySubscription-id}`
   *
   * Get a specific commercial subscription that an organization acquired.
   */
  get: function get(
    params?: IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directory/subscriptions/{companySubscription-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['companySubscription-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/subscriptions/{companySubscription-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['body'],
    params?: IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directory/subscriptions/{companySubscription-id}',
      paramDefs: {
        path: ['companySubscription-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/subscriptions/{companySubscription-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/subscriptions/{companySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/subscriptions/{companySubscription-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directory/subscriptions/{companySubscription-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['companySubscription-id'],
      },
      params,
    };
  },
};
