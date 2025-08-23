export * as alerts from './alerts';
export * as attackSimulation from './attackSimulation';
export * as cases from './cases';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as identities from './identities';
export * as incidents from './incidents';
export * as labels from './labels';
export * as secureScoreControlProfiles from './secureScoreControlProfiles';
export * as secureScores from './secureScores';
export * as subjectRightsRequests from './subjectRightsRequests';
export * as threatIntelligence from './threatIntelligence';
export * as triggerTypes from './triggerTypes';
export * as triggers from './triggers';

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
    method: 'patch',
    path: '/security',
    paramDefs: [],
    params,
    body,
  };
}
