export * as administrativeUnits from './administrativeUnits';
export * as authenticationMethodDevices from './authenticationMethodDevices';
export * as certificateAuthorities from './certificateAuthorities';
export * as customSecurityAttributeDefinitions from './customSecurityAttributeDefinitions';
export * as deletedItems from './deletedItems';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as impactedResources from './impactedResources';
export * as inboundSharedUserProfiles from './inboundSharedUserProfiles';
export * as outboundSharedUserProfiles from './outboundSharedUserProfiles';
export * as publicKeyInfrastructure from './publicKeyInfrastructure';
export * as recommendations from './recommendations';
export * as templates from './templates';

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
  'GET /directory/externalUserProfiles': Operation<'/directory/externalUserProfiles', 'get'>;
  'POST /directory/externalUserProfiles': Operation<'/directory/externalUserProfiles', 'post'>;
  'GET /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
    'get'
  >;
  'PATCH /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
    'patch'
  >;
  'DELETE /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
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
  'GET /directory/pendingExternalUserProfiles': Operation<
    '/directory/pendingExternalUserProfiles',
    'get'
  >;
  'POST /directory/pendingExternalUserProfiles': Operation<
    '/directory/pendingExternalUserProfiles',
    'post'
  >;
  'GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'get'
  >;
  'PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'patch'
  >;
  'DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'delete'
  >;
  'GET /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'get'
  >;
  'PATCH /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'patch'
  >;
  'DELETE /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'delete'
  >;
  'GET /directory/sharedEmailDomains': Operation<'/directory/sharedEmailDomains', 'get'>;
  'POST /directory/sharedEmailDomains': Operation<'/directory/sharedEmailDomains', 'post'>;
  'GET /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    'get'
  >;
  'PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    'patch'
  >;
  'DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
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
    ver: 'beta',
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
    ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Get a list of the deviceLocalCredentialInfo objects and their properties excluding the credentials.
   */
  list: function list(
    params?: IEndpoints['GET /directory/deviceLocalCredentials']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/deviceLocalCredentials']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const externalUserProfiles = {
  /**
   * `GET /directory/externalUserProfiles`
   *
   * Retrieve the properties of all externalUserProfiles
   */
  list: function list(
    params?: IEndpoints['GET /directory/externalUserProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/externalUserProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/externalUserProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/externalUserProfiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/externalUserProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /directory/externalUserProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/externalUserProfiles',
      body,
    };
  },
  /**
   * `GET /directory/externalUserProfiles/{externalUserProfile-id}`
   *
   * Retrieve the properties of a specific externalUserProfile.
   */
  get: function get(
    params?: IEndpoints['GET /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/externalUserProfiles/{externalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/externalUserProfiles/{externalUserProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalUserProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/externalUserProfiles/{externalUserProfile-id}`
   *
   * Update the properties of a externalUserProfile object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['body'],
    params?: IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/externalUserProfiles/{externalUserProfile-id}',
      paramDefs: {
        path: ['externalUserProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/externalUserProfiles/{externalUserProfile-id}`
   *
   * Delete an externalUserProfile object. Note: To permanently delete the externalUserProfile, follow permanently delete an item. To restore an externalUserProfile, follow restore a deleted item.
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/externalUserProfiles/{externalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/externalUserProfiles/{externalUserProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalUserProfile-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const pendingExternalUserProfiles = {
  /**
   * `GET /directory/pendingExternalUserProfiles`
   *
   * Retrieve the properties of all pendingExternalUserProfiles.
   */
  list: function list(
    params?: IEndpoints['GET /directory/pendingExternalUserProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/pendingExternalUserProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/pendingExternalUserProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/pendingExternalUserProfiles`
   *
   * Create a new pendingExternalUserProfile object.
   */
  create: function create(
    body: IEndpoints['POST /directory/pendingExternalUserProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /directory/pendingExternalUserProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/pendingExternalUserProfiles',
      body,
    };
  },
  /**
   * `GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
   *
   * Retrieve the properties of a specific pendingExternalUserProfile.
   */
  get: function get(
    params?: IEndpoints['GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['pendingExternalUserProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
   *
   * Update the properties of a pendingExternalUserProfile object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['body'],
    params?: IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
      paramDefs: {
        path: ['pendingExternalUserProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
   *
   * Delete a pendingExternalUserProfile object. Note: To permanently delete the pendingExternalUserProfile, follow permanently delete an item. To restore a pendingExternalUserProfile, follow restore a deleted item.
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['pendingExternalUserProfile-id'],
      },
      params,
    };
  },
};

export const recommendationConfiguration = {
  /**
   * `GET /directory/recommendationConfiguration`
   *
   * Read the properties and relationships of a recommendationConfiguration object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/recommendationConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/recommendationConfiguration']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/recommendationConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/recommendationConfiguration`
   *
   * Update the properties of a recommendationConfiguration object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/recommendationConfiguration']['body']
  ): EndpointRequest<IEndpoints['PATCH /directory/recommendationConfiguration']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/recommendationConfiguration',
      body,
    };
  },
  /**
   * `DELETE /directory/recommendationConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/recommendationConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /directory/recommendationConfiguration']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/recommendationConfiguration',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const sharedEmailDomains = {
  /**
   * `GET /directory/sharedEmailDomains`
   *
   */
  list: function list(
    params?: IEndpoints['GET /directory/sharedEmailDomains']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/sharedEmailDomains']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/sharedEmailDomains',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/sharedEmailDomains`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/sharedEmailDomains']['body']
  ): EndpointRequest<IEndpoints['POST /directory/sharedEmailDomains']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/sharedEmailDomains',
      body,
    };
  },
  /**
   * `GET /directory/sharedEmailDomains/{sharedEmailDomain-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedEmailDomain-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['body'],
    params?: IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
      paramDefs: {
        path: ['sharedEmailDomain-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedEmailDomain-id'],
      },
      params,
    };
  },
};

export const subscriptions = {
  /**
   * `GET /directory/subscriptions`
   *
   * Get the list of commercial subscriptions that an organization has acquired.
   */
  list: function list(
    params?: IEndpoints['GET /directory/subscriptions']['parameters']
  ): EndpointRequest<IEndpoints['GET /directory/subscriptions']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
      method: 'post',
      path: '/directory/subscriptions',
      body,
    };
  },
  /**
   * `GET /directory/subscriptions/{companySubscription-id}`
   *
   * Get a specific commercial subscription that an organization has acquired.
   */
  get: function get(
    params?: IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
