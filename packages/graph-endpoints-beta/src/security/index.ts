export * as alerts from './alerts';
export * as attackSimulation from './attackSimulation';
export * as auditLog from './auditLog';
export * as cases from './cases';
export * as cloudAppSecurityProfiles from './cloudAppSecurityProfiles';
export * as collaboration from './collaboration';
export * as dataDiscovery from './dataDiscovery';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as domainSecurityProfiles from './domainSecurityProfiles';
export * as fileSecurityProfiles from './fileSecurityProfiles';
export * as hostSecurityProfiles from './hostSecurityProfiles';
export * as identities from './identities';
export * as incidentTasks from './incidentTasks';
export * as incidents from './incidents';
export * as informationProtection from './informationProtection';
export * as ipSecurityProfiles from './ipSecurityProfiles';
export * as labels from './labels';
export * as partner from './partner';
export * as providerTenantSettings from './providerTenantSettings';
export * as rules from './rules';
export * as secureScoreControlProfiles from './secureScoreControlProfiles';
export * as secureScores from './secureScores';
export * as securityActions from './securityActions';
export * as subjectRightsRequests from './subjectRightsRequests';
export * as threatIntelligence from './threatIntelligence';
export * as threatSubmission from './threatSubmission';
export * as tiIndicators from './tiIndicators';
export * as triggerTypes from './triggerTypes';
export * as triggers from './triggers';
export * as userSecurityProfiles from './userSecurityProfiles';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /security': Operation<'/security', 'get'>;
  'PATCH /security': Operation<'/security', 'patch'>;
}

/**
 * `GET /security`
 *
 */
export function get(
  params?: IEndpoints['GET /security']['parameters']
): EndpointRequest<IEndpoints['GET /security']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security`
 *
 */
export function update(
  body: IEndpoints['PATCH /security']['body'],
  params?: IEndpoints['PATCH /security']['parameters']
): EndpointRequest<IEndpoints['PATCH /security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security',
    paramDefs: [],
    params,
    body,
  };
}
