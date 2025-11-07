export * as activityBasedTimeoutPolicies from './activityBasedTimeoutPolicies';
export * as appManagementPolicies from './appManagementPolicies';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as authenticationStrengthPolicies from './authenticationStrengthPolicies';
export * as authorizationPolicy from './authorizationPolicy';
export * as claimsMappingPolicies from './claimsMappingPolicies';
export * as conditionalAccessPolicies from './conditionalAccessPolicies';
export * as crossTenantAccessPolicy from './crossTenantAccessPolicy';
export * as deletedItems from './deletedItems';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as mobileAppManagementPolicies from './mobileAppManagementPolicies';
export * as mobileDeviceManagementPolicies from './mobileDeviceManagementPolicies';
export * as permissionGrantPolicies from './permissionGrantPolicies';
export * as roleManagementPolicies from './roleManagementPolicies';
export * as roleManagementPolicyAssignments from './roleManagementPolicyAssignments';
export * as servicePrincipalCreationPolicies from './servicePrincipalCreationPolicies';
export * as tokenIssuancePolicies from './tokenIssuancePolicies';
export * as tokenLifetimePolicies from './tokenLifetimePolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /policies': Operation<'/policies', 'get'>;
  'PATCH /policies': Operation<'/policies', 'patch'>;
  'GET /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'get'>;
  'PATCH /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'patch'>;
  'DELETE /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'delete'>;
  'GET /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'get'
  >;
  'PATCH /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'patch'
  >;
  'DELETE /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'delete'
  >;
  'GET /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'get'
  >;
  'PATCH /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'patch'
  >;
  'DELETE /policies/authenticationFlowsPolicy': Operation<
    '/policies/authenticationFlowsPolicy',
    'delete'
  >;
  'GET /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'get'
  >;
  'PATCH /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'patch'
  >;
  'DELETE /policies/b2cAuthenticationMethodsPolicy': Operation<
    '/policies/b2cAuthenticationMethodsPolicy',
    'delete'
  >;
  'GET /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'get'
  >;
  'PATCH /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'patch'
  >;
  'DELETE /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'delete'
  >;
  'GET /policies/deviceRegistrationPolicy': Operation<'/policies/deviceRegistrationPolicy', 'get'>;
  'GET /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'get'
  >;
  'PATCH /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'patch'
  >;
  'DELETE /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'delete'
  >;
  'GET /policies/externalIdentitiesPolicy': Operation<'/policies/externalIdentitiesPolicy', 'get'>;
  'PATCH /policies/externalIdentitiesPolicy': Operation<
    '/policies/externalIdentitiesPolicy',
    'patch'
  >;
  'DELETE /policies/externalIdentitiesPolicy': Operation<
    '/policies/externalIdentitiesPolicy',
    'delete'
  >;
  'GET /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'get'
  >;
  'PATCH /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'patch'
  >;
  'DELETE /policies/federatedTokenValidationPolicy': Operation<
    '/policies/federatedTokenValidationPolicy',
    'delete'
  >;
  'GET /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'get'
  >;
  'PATCH /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'patch'
  >;
  'DELETE /policies/identitySecurityDefaultsEnforcementPolicy': Operation<
    '/policies/identitySecurityDefaultsEnforcementPolicy',
    'delete'
  >;
  'GET /policies/permissionGrantPreApprovalPolicies': Operation<
    '/policies/permissionGrantPreApprovalPolicies',
    'get'
  >;
  'POST /policies/permissionGrantPreApprovalPolicies': Operation<
    '/policies/permissionGrantPreApprovalPolicies',
    'post'
  >;
  'GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'patch'
  >;
  'DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'delete'
  >;
}

/**
 * `GET /policies`
 *
 */
export function list(
  params?: IEndpoints['GET /policies']['parameters']
): EndpointRequest<IEndpoints['GET /policies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies']['body']
): EndpointRequest<IEndpoints['PATCH /policies']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies',
    body,
  };
}

export const accessReviewPolicy = {
  /**
   * `GET /policies/accessReviewPolicy`
   *
   * Read the properties and relationships of an accessReviewPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/accessReviewPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/accessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/accessReviewPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/accessReviewPolicy`
   *
   * Update the properties of an accessReviewPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/accessReviewPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/accessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/accessReviewPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/accessReviewPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/accessReviewPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/accessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/accessReviewPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const adminConsentRequestPolicy = {
  /**
   * `GET /policies/adminConsentRequestPolicy`
   *
   * Read the properties and relationships of an adminConsentRequestPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/adminConsentRequestPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/adminConsentRequestPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/adminConsentRequestPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/adminConsentRequestPolicy`
   *
   * Update the properties of an adminConsentRequestPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/adminConsentRequestPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/adminConsentRequestPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/adminConsentRequestPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/adminConsentRequestPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/adminConsentRequestPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/adminConsentRequestPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/adminConsentRequestPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const authenticationFlowsPolicy = {
  /**
   * `GET /policies/authenticationFlowsPolicy`
   *
   * Read the properties and relationships of an authenticationFlowsPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/authenticationFlowsPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/authenticationFlowsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/authenticationFlowsPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/authenticationFlowsPolicy`
   *
   * Update the Boolean selfServiceSignUp property of an authenticationFlowsPolicy object. The properties id, type, and description cannot be modified.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authenticationFlowsPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/authenticationFlowsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/authenticationFlowsPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/authenticationFlowsPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/authenticationFlowsPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/authenticationFlowsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/authenticationFlowsPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const b2cAuthenticationMethodsPolicy = {
  /**
   * `GET /policies/b2cAuthenticationMethodsPolicy`
   *
   * Read the properties of a b2cAuthenticationMethodsPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/b2cAuthenticationMethodsPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/b2cAuthenticationMethodsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/b2cAuthenticationMethodsPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/b2cAuthenticationMethodsPolicy`
   *
   * Update the properties of a b2cAuthenticationMethodsPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/b2cAuthenticationMethodsPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/b2cAuthenticationMethodsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/b2cAuthenticationMethodsPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/b2cAuthenticationMethodsPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/b2cAuthenticationMethodsPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/b2cAuthenticationMethodsPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/b2cAuthenticationMethodsPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const defaultAppManagementPolicy = {
  /**
   * `GET /policies/defaultAppManagementPolicy`
   *
   * Read the properties of a tenantAppManagementPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/defaultAppManagementPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/defaultAppManagementPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/defaultAppManagementPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/defaultAppManagementPolicy`
   *
   * Update the properties of a tenantAppManagementPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/defaultAppManagementPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/defaultAppManagementPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/defaultAppManagementPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/defaultAppManagementPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/defaultAppManagementPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/defaultAppManagementPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/defaultAppManagementPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceRegistrationPolicy = {
  /**
   * `GET /policies/deviceRegistrationPolicy`
   *
   * Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
   */
  get: function get(
    params?: IEndpoints['GET /policies/deviceRegistrationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/deviceRegistrationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/deviceRegistrationPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const directoryRoleAccessReviewPolicy = {
  /**
   * `GET /policies/directoryRoleAccessReviewPolicy`
   *
   */
  get: function get(
    params?: IEndpoints['GET /policies/directoryRoleAccessReviewPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/directoryRoleAccessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/directoryRoleAccessReviewPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/directoryRoleAccessReviewPolicy`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/directoryRoleAccessReviewPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/directoryRoleAccessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/directoryRoleAccessReviewPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/directoryRoleAccessReviewPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/directoryRoleAccessReviewPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/directoryRoleAccessReviewPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/directoryRoleAccessReviewPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const externalIdentitiesPolicy = {
  /**
   * `GET /policies/externalIdentitiesPolicy`
   *
   * Read the properties and relationships of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave a Microsoft Entra tenant via self-service controls.
   */
  get: function get(
    params?: IEndpoints['GET /policies/externalIdentitiesPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/externalIdentitiesPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/externalIdentitiesPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/externalIdentitiesPolicy`
   *
   * Update the settings of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave a Microsoft Entra tenant via self-service controls.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/externalIdentitiesPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/externalIdentitiesPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/externalIdentitiesPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/externalIdentitiesPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/externalIdentitiesPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/externalIdentitiesPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/externalIdentitiesPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const federatedTokenValidationPolicy = {
  /**
   * `GET /policies/federatedTokenValidationPolicy`
   *
   * Read the properties and relationships of a federatedTokenValidationPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/federatedTokenValidationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/federatedTokenValidationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/federatedTokenValidationPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/federatedTokenValidationPolicy`
   *
   * Update the properties of a federatedTokenValidationPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/federatedTokenValidationPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/federatedTokenValidationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/federatedTokenValidationPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/federatedTokenValidationPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/federatedTokenValidationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/federatedTokenValidationPolicy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/federatedTokenValidationPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const identitySecurityDefaultsEnforcementPolicy = {
  /**
   * `GET /policies/identitySecurityDefaultsEnforcementPolicy`
   *
   * Retrieve the properties of an identitySecurityDefaultsEnforcementPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/identitySecurityDefaultsEnforcementPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/identitySecurityDefaultsEnforcementPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/identitySecurityDefaultsEnforcementPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/identitySecurityDefaultsEnforcementPolicy`
   *
   * Update the properties of an identitySecurityDefaultsEnforcementPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/identitySecurityDefaultsEnforcementPolicy']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/identitySecurityDefaultsEnforcementPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/identitySecurityDefaultsEnforcementPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/identitySecurityDefaultsEnforcementPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/identitySecurityDefaultsEnforcementPolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/identitySecurityDefaultsEnforcementPolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/identitySecurityDefaultsEnforcementPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const permissionGrantPreApprovalPolicies = {
  /**
   * `GET /policies/permissionGrantPreApprovalPolicies`
   *
   * Retrieve the list of permissionGrantPreApprovalPolicy objects in the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /policies/permissionGrantPreApprovalPolicies']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/permissionGrantPreApprovalPolicies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/permissionGrantPreApprovalPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /policies/permissionGrantPreApprovalPolicies`
   *
   * Create a new permissionGrantPreApprovalPolicy object.
   */
  create: function create(
    body: IEndpoints['POST /policies/permissionGrantPreApprovalPolicies']['body']
  ): EndpointRequest<IEndpoints['POST /policies/permissionGrantPreApprovalPolicies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/permissionGrantPreApprovalPolicies',
      body,
    };
  },
  /**
   * `GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
   *
   * Read the properties and relationships of a permissionGrantPreApprovalPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['permissionGrantPreApprovalPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
   *
   * Update the properties of a permissionGrantPreApprovalPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['body'],
    params?: IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
      paramDefs: {
        path: ['permissionGrantPreApprovalPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
   *
   * Delete a permissionGrantPreApprovalPolicy object.
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['permissionGrantPreApprovalPolicy-id'],
      },
      params,
    };
  },
};
