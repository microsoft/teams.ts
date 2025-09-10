export * as activityBasedTimeoutPolicies from './activityBasedTimeoutPolicies';
export * as appManagementPolicies from './appManagementPolicies';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as authenticationStrengthPolicies from './authenticationStrengthPolicies';
export * as claimsMappingPolicies from './claimsMappingPolicies';
export * as crossTenantAccessPolicy from './crossTenantAccessPolicy';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as permissionGrantPolicies from './permissionGrantPolicies';
export * as roleManagementPolicies from './roleManagementPolicies';
export * as roleManagementPolicyAssignments from './roleManagementPolicyAssignments';
export * as tokenIssuancePolicies from './tokenIssuancePolicies';
export * as tokenLifetimePolicies from './tokenLifetimePolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /policies': Operation<'/policies', 'get'>;
  'PATCH /policies': Operation<'/policies', 'patch'>;
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
  'GET /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'get'>;
  'PATCH /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'patch'>;
  'DELETE /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'delete'>;
  'GET /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'get'
  >;
  'POST /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'post'
  >;
  'GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
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
}

/**
 * `GET /policies`
 *
 */
export function list(
  params?: IEndpoints['GET /policies']['parameters']
): EndpointRequest<IEndpoints['GET /policies']['response']> {
  return {
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
    method: 'patch',
    path: '/policies',
    body,
  };
}

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
   * Update the selfServiceSignUp property of an authenticationFlowsPolicy object. The properties id, type, and description cannot be modified.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authenticationFlowsPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/authenticationFlowsPolicy']['response']> {
    return {
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
      method: 'delete',
      path: '/policies/authenticationFlowsPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const authorizationPolicy = {
  /**
   * `GET /policies/authorizationPolicy`
   *
   * Retrieve the properties of an authorizationPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/authorizationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/authorizationPolicy']['response']> {
    return {
      method: 'get',
      path: '/policies/authorizationPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/authorizationPolicy`
   *
   * Update the properties of an authorizationPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authorizationPolicy']['body']
  ): EndpointRequest<IEndpoints['PATCH /policies/authorizationPolicy']['response']> {
    return {
      method: 'patch',
      path: '/policies/authorizationPolicy',
      body,
    };
  },
  /**
   * `DELETE /policies/authorizationPolicy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/authorizationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /policies/authorizationPolicy']['response']> {
    return {
      method: 'delete',
      path: '/policies/authorizationPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const conditionalAccessPolicies = {
  /**
   * `GET /policies/conditionalAccessPolicies`
   *
   * The custom rules that define an access scenario.
   */
  list: function list(
    params?: IEndpoints['GET /policies/conditionalAccessPolicies']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/conditionalAccessPolicies']['response']> {
    return {
      method: 'get',
      path: '/policies/conditionalAccessPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /policies/conditionalAccessPolicies`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/conditionalAccessPolicies']['body']
  ): EndpointRequest<IEndpoints['POST /policies/conditionalAccessPolicies']['response']> {
    return {
      method: 'post',
      path: '/policies/conditionalAccessPolicies',
      body,
    };
  },
  /**
   * `GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
   *
   * The custom rules that define an access scenario.
   */
  get: function get(
    params?: IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['body'],
    params?: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
      paramDefs: {
        path: ['conditionalAccessPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['conditionalAccessPolicy-id'],
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
   */
  get: function get(
    params?: IEndpoints['GET /policies/deviceRegistrationPolicy']['parameters']
  ): EndpointRequest<IEndpoints['GET /policies/deviceRegistrationPolicy']['response']> {
    return {
      method: 'get',
      path: '/policies/deviceRegistrationPolicy',
      paramDefs: {
        query: ['$select', '$expand'],
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
      method: 'delete',
      path: '/policies/identitySecurityDefaultsEnforcementPolicy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
