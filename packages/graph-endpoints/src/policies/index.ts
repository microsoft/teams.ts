export * as activityBasedTimeoutPolicies from './activityBasedTimeoutPolicies';
export * as adminConsentRequestPolicy from './adminConsentRequestPolicy';
export * as appManagementPolicies from './appManagementPolicies';
export * as authenticationFlowsPolicy from './authenticationFlowsPolicy';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as authenticationStrengthPolicies from './authenticationStrengthPolicies';
export * as authorizationPolicy from './authorizationPolicy';
export * as claimsMappingPolicies from './claimsMappingPolicies';
export * as conditionalAccessPolicies from './conditionalAccessPolicies';
export * as crossTenantAccessPolicy from './crossTenantAccessPolicy';
export * as defaultAppManagementPolicy from './defaultAppManagementPolicy';
export * as deviceRegistrationPolicy from './deviceRegistrationPolicy';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as identitySecurityDefaultsEnforcementPolicy from './identitySecurityDefaultsEnforcementPolicy';
export * as permissionGrantPolicies from './permissionGrantPolicies';
export * as roleManagementPolicies from './roleManagementPolicies';
export * as roleManagementPolicyAssignments from './roleManagementPolicyAssignments';
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
    method: 'patch',
    path: '/policies',
    paramDefs: [],
    params,
    body,
  };
}
