export * as accessReviewPolicy from './accessReviewPolicy';
export * as activityBasedTimeoutPolicies from './activityBasedTimeoutPolicies';
export * as adminConsentRequestPolicy from './adminConsentRequestPolicy';
export * as appManagementPolicies from './appManagementPolicies';
export * as authenticationFlowsPolicy from './authenticationFlowsPolicy';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as authenticationStrengthPolicies from './authenticationStrengthPolicies';
export * as authorizationPolicy from './authorizationPolicy';
export * as b2cAuthenticationMethodsPolicy from './b2cAuthenticationMethodsPolicy';
export * as claimsMappingPolicies from './claimsMappingPolicies';
export * as crossTenantAccessPolicy from './crossTenantAccessPolicy';
export * as defaultAppManagementPolicy from './defaultAppManagementPolicy';
export * as deviceRegistrationPolicy from './deviceRegistrationPolicy';
export * as directoryRoleAccessReviewPolicy from './directoryRoleAccessReviewPolicy';
export * as externalIdentitiesPolicy from './externalIdentitiesPolicy';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as federatedTokenValidationPolicy from './federatedTokenValidationPolicy';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as identitySecurityDefaultsEnforcementPolicy from './identitySecurityDefaultsEnforcementPolicy';
export * as mobileAppManagementPolicies from './mobileAppManagementPolicies';
export * as mobileDeviceManagementPolicies from './mobileDeviceManagementPolicies';
export * as permissionGrantPolicies from './permissionGrantPolicies';
export * as permissionGrantPreApprovalPolicies from './permissionGrantPreApprovalPolicies';
export * as roleManagementPolicies from './roleManagementPolicies';
export * as roleManagementPolicyAssignments from './roleManagementPolicyAssignments';
export * as servicePrincipalCreationPolicies from './servicePrincipalCreationPolicies';
export * as tokenIssuancePolicies from './tokenIssuancePolicies';
export * as tokenLifetimePolicies from './tokenLifetimePolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /policies': Operation<'/policies', 'get'>;
  'PATCH /policies': Operation<'/policies', 'patch'>;
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies']['body'],
  params?: IEndpoints['PATCH /policies']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies',
    paramDefs: [],
    params,
    body,
  };
}
