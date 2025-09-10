export * as accessReviews from './accessReviews';
export * as appConsent from './appConsent';
export * as entitlementManagement from './entitlementManagement';
export * as lifecycleWorkflows from './lifecycleWorkflows';
export * as privilegedAccess from './privilegedAccess';
export * as termsOfUse from './termsOfUse';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance': Operation<'/identityGovernance', 'get'>;
  'PATCH /identityGovernance': Operation<'/identityGovernance', 'patch'>;
}

/**
 * `GET /identityGovernance`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance']['response']> {
  return {
    method: 'get',
    path: '/identityGovernance',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance']['response']> {
  return {
    method: 'patch',
    path: '/identityGovernance',
    body,
  };
}
