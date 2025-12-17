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
  'GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'patch'
  >;
  'PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'put'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials',
    'post'
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
  'POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials',
    'post'
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
  'POST /servicePrincipals/getByIds': Operation<'/servicePrincipals/getByIds', 'post'>;
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberGroups',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials',
    'post'
  >;
  'POST /servicePrincipals/getUserOwnedObjects': Operation<
    '/servicePrincipals/getUserOwnedObjects',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/licenseDetails': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/licenseDetails': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'delete'
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
  'GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'get'
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
  'POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials',
    'post'
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals',
    body,
  };
}

export const addTokenSigningCertificate = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate`
  *
  * Creates a self-signed signing certificate and returns a selfSignedCertificate object, which is the public part of the generated certificate. The self-signed signing certificate is composed of the following objects which are added to the servicePrincipal: 
+ The keyCredentials object with the following objects:
    + A private key object with usage set to Sign.
    + A public key object with usage set to Verify.
+ The passwordCredentials object. All the objects have the same value of customKeyIdentifier. The passwordCredential is used to open the PFX file (private key). It and the associated private key object have the same value of keyId. Once set during creation through the displayName property, the subject of the certificate cannot be updated. The startDateTime is set to the same time the certificate is created using the action. The endDateTime can be up to three years after the certificate is created.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['response']
  > {
    return {
      ver: 'beta',
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
   * The appManagementPolicy applied to this service principal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['response']
  > {
    return {
      ver: 'beta',
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
   * The appManagementPolicy applied to this service principal.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Deletes an appRoleAssignment that a service principal has been granted. App roles that are assigned to service principals are also known as application permissions. Deleting an app role assignment for a service principal is equivalent to revoking the app-only permission grant.
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const claimsPolicy = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
   *
   * Get the properties and relationships of a customClaimsPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
   *
   * Update a customClaimsPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
   *
   * Update a customClaimsPolicy object.
   */
  set: function set(
    body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['body'],
    params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const createPasswordSingleSignOnCredentials = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials`
   *
   * Create single sign-on credentials using a password for a user or group.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const deletePasswordSingleSignOnCredentials = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials`
   *
   * Delete single sign-on credentials using a password for a user or group.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const endpoints = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/endpoints`
   *
   * Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const getByIds = {
  /**
   * `POST /servicePrincipals/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /servicePrincipals/getByIds']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
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

export const getPasswordSingleSignOnCredentials = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials`
   *
   * Get a list of single sign-on credentials using a password for a user or group.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /servicePrincipals/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /servicePrincipals/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/getUserOwnedObjects',
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
      ver: 'beta',
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

export const licenseDetails = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/licenseDetails`
   *
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/licenseDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'licenseDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'licenseDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'licenseDetails-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/memberOf`
   *
   * Get the groups and directory roles that this servicePrincipal is a direct member of. This operation isn&#x27;t transitive.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
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
   * Directory objects that are owners of this servicePrincipal. The owners are a set of nonadmin users or servicePrincipals who are allowed to modify this object. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['response']
  > {
    return {
      ver: 'beta',
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

export const permissionGrantPreApprovalPolicies = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies`
   *
   * Retrieve the permissionGrantPreApprovalPolicy object for the servicePrincipal.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
   *
   * Retrieve the permissionGrantPreApprovalPolicy object for the servicePrincipal.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'permissionGrantPreApprovalPolicy-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /servicePrincipals/{servicePrincipal-id}/restore`
  *
  * Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- externalUserProfile
- group
- pendingExternalUserProfile
- servicePrincipal
- user If an item was accidentally deleted, you can fully restore the item. This isn&#x27;t applicable to security groups, which are deleted permanently. Also, restoring an application doesn&#x27;t restore the associated service principal automatically. You must call this API to explicitly restore the deleted service principal. A recently deleted item remains available for up to 30 days. After 30 days, the item is permanently deleted.
  */
  create: function create(
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/restore']['response']
  > {
    return {
      ver: 'beta',
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
   * The tokenIssuancePolicies assigned to this service principal. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const updatePasswordSingleSignOnCredentials = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials`
   *
   * Update single sign-on credentials using a password for a user or group.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /servicePrincipals/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /servicePrincipals/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/validateProperties',
      body,
    };
  },
};
