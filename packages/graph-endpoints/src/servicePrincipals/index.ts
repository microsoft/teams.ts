export * as remoteDesktopSecurityConfiguration from './remoteDesktopSecurityConfiguration';
export * as synchronization from './synchronization';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'delete'
  >;
  'GET /servicePrincipals': Operation<'/servicePrincipals', 'get'>;
  'GET /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'patch'
  >;
  'POST /servicePrincipals': Operation<'/servicePrincipals', 'post'>;
  'POST /servicePrincipals/{servicePrincipal-id}/addKey': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addKey',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/addPassword': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addPassword',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/checkMemberGroups',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/checkMemberObjects',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/createdObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createdObjects',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/endpoints': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/endpoints': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'delete'
  >;
  'POST /servicePrincipals/getAvailableExtensionProperties': Operation<
    '/servicePrincipals/getAvailableExtensionProperties',
    'post'
  >;
  'POST /servicePrincipals/getByIds': Operation<'/servicePrincipals/getByIds', 'post'>;
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberGroups',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/memberOf': Operation<
    '/servicePrincipals/{servicePrincipal-id}/memberOf',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants': Operation<
    '/servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/ownedObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/ownedObjects',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/owners': Operation<
    '/servicePrincipals/{servicePrincipal-id}/owners',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/removeKey': Operation<
    '/servicePrincipals/{servicePrincipal-id}/removeKey',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/removePassword': Operation<
    '/servicePrincipals/{servicePrincipal-id}/removePassword',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/restore': Operation<
    '/servicePrincipals/{servicePrincipal-id}/restore',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf': Operation<
    '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'POST /servicePrincipals/validateProperties': Operation<
    '/servicePrincipals/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}`
 *
 * Delete a servicePrincipal object.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals`
 *
 * Retrieve a list of servicePrincipal objects.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals']['parameters']
): EndpointRequest<IEndpoints['GET /servicePrincipals']['response']> {
  return {
    method: 'get',
    path: '/servicePrincipals',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}`
 *
 * Retrieve the properties and relationships of a servicePrincipal object.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['GET /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: {
      path: ['servicePrincipal-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}`
 *
 * Create a new servicePrincipal object if it doesn&#x27;t exist, or update the properties of an existing servicePrincipal object.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: {
      path: ['servicePrincipal-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals`
 *
 * Create a new servicePrincipal object.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals']['body']
): EndpointRequest<IEndpoints['POST /servicePrincipals']['response']> {
  return {
    method: 'post',
    path: '/servicePrincipals',
    body,
  };
}

export const addKey = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/addKey`
   *
   * Adds a key credential to a servicePrincipal. This method along with removeKey can be used by a servicePrincipal to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  ServicePrincipals that don&#x27;t have any existing valid certificates (i.e.: no certificates have been added yet, or all certificates have expired), won&#x27;t be able to use this service action. Update servicePrincipal can be used to perform an update instead.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/addKey',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const addPassword = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/addPassword`
   *
   * Add a strong password or secret to a servicePrincipal object.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/addPassword',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const addTokenSigningCertificate = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate`
  *
  * Create a self-signed signing certificate and return a selfSignedCertificate object, which is the public part of the generated certificate.  The self-signed signing certificate is composed of the following objects, which are added to the servicePrincipal: 
+ The keyCredentials object with the following objects:
    + A private key object with usage set to Sign.
    + A public key object with usage set to Verify.
+ The passwordCredentials object.  All the objects have the same value of customKeyIdentifier. The passwordCredential is used to open the PFX file (private key). It and the associated private key object have the same value of keyId. When set during creation through the displayName property, the subject of the certificate cannot be updated. The startDateTime is set to the same time the certificate is created using the action. The endDateTime can be up to three years after the certificate is created.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const appManagementPolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies`
   *
   * The appManagementPolicy applied to this application.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}`
   *
   * The appManagementPolicy applied to this application.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'appManagementPolicy-id'],
      },
      params,
    };
  },
};

export const appRoleAssignedTo = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo`
   *
   * Read the properties and relationships of an appRoleAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo`
   *
   * Assign an app role for a resource service principal, to a user, group, or client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment, you need three identifiers:
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
   *
   * Read the properties and relationships of an appRoleAssignment object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
   *
   * Deletes an appRoleAssignment that a user, group, or client service principal has been granted for a resource service principal.
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
};

export const appRoleAssignments = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments`
   *
   * Read the properties and relationships of an appRoleAssignment object.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments`
   *
   * Assign an app role to a client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment to a client service principal, you need three identifiers:
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Read the properties and relationships of an appRoleAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Deletes an appRoleAssignment that a service principal has been granted. App roles which are assigned to service principals are also known as application permissions. Deleting an app role assignment for a service principal is equivalent to revoking the app-only permission grant.
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups`
  *
  * Check for membership in a specified list of group IDs, and return from that list the IDs of groups where a specified object is a member. The specified object can be of one of the following types:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Microsoft Entra ID. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/checkMemberGroups',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/checkMemberObjects',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const claimsMappingPolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies`
   *
   * List the claimsMappingPolicy objects that are assigned to a servicePrincipal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const createdObjects = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/createdObjects`
   *
   * Retrieve a list of directoryobject objects.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/createdObjects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}`
   *
   * Directory objects created by this service principal. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const delegatedPermissionClassifications = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications`
   *
   * Retrieve the list of delegatedPermissionClassification currently configured for the delegated permissions exposed by an API.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications`
   *
   * Classify a delegated permission by adding a delegatedPermissionClassification to the servicePrincipal representing the API.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'delegatedPermissionClassification-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'delegatedPermissionClassification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
   *
   * Deletes a delegatedPermissionClassification which had previously been set for a delegated permission.
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'delegatedPermissionClassification-id'],
      },
      params,
    };
  },
};

export const endpoints = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/endpoints`
   *
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/endpoints',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/endpoints`
   *
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/endpoints',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'endpoint-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'endpoint-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'endpoint-id'],
      },
      params,
    };
  },
};

export const federatedIdentityCredentials = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials`
   *
   * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials`
   *
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'federatedIdentityCredential-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'federatedIdentityCredential-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'federatedIdentityCredential-id'],
      },
      params,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /servicePrincipals/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/getAvailableExtensionProperties']['body']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/getAvailableExtensionProperties']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /servicePrincipals/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /servicePrincipals/getByIds']['response']> {
    return {
      method: 'post',
      path: '/servicePrincipals/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/getMemberGroups',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects`
  *
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const homeRealmDiscoveryPolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies`
   *
   * List the homeRealmDiscoveryPolicy objects that are assigned to a servicePrincipal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/memberOf`
   *
   * Get the groups and directory roles that this servicePrincipal is a direct member of. This operation is not transitive.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}`
   *
   * Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const oauth2PermissionGrants = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants`
   *
   * Retrieve a list of oAuth2PermissionGrant entities, representing delegated permissions granted to the service principal (representing the client application) to access an API on behalf of a user.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   * Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'oAuth2PermissionGrant-id'],
      },
      params,
    };
  },
};

export const ownedObjects = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/ownedObjects`
   *
   * Retrieve a list of objects owned by the servicePrincipal.  This could include applications or groups.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/ownedObjects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}`
   *
   * Directory objects that this service principal owns. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const owners = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/owners`
   *
   * Directory objects that are owners of this servicePrincipal. The owners are a set of nonadmin users or servicePrincipals who are allowed to modify this object. Supports $expand, $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1), and $select nested in $expand.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/owners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const removeKey = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/removeKey`
   *
   * Remove a key credential from a servicePrincipal. This method along with addKey can be used by a servicePrincipal to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/removeKey',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const removePassword = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/removePassword`
   *
   * Remove a password from a servicePrincipal object.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/removePassword',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/restore`
  *
  * Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.  Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
  */
  create: function create(
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/restore',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const tokenIssuancePolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies`
   *
   * The tokenIssuancePolicies assigned to this service principal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const tokenLifetimePolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies`
   *
   * List the tokenLifetimePolicy objects that are assigned to a servicePrincipal. Only one object is returned in the collection because only one tokenLifetimePolicy can be assigned to a service principal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf`
   *
   * Get the groups and directory roles that this servicePrincipal is a member of. This operation is transitive and will include all groups that this service principal is a nested member of.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /servicePrincipals/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /servicePrincipals/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/servicePrincipals/validateProperties',
      body,
    };
  },
};
