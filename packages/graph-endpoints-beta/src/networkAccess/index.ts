export * as alerts from './alerts';
export * as connectivity from './connectivity';
export * as filteringPolicies from './filteringPolicies';
export * as filteringProfiles from './filteringProfiles';
export * as forwardingPolicies from './forwardingPolicies';
export * as forwardingProfiles from './forwardingProfiles';
export * as logs from './logs';
export * as reports from './reports';
export * as settings from './settings';
export * as tenantStatus from './tenantStatus';
export * as threatIntelligencePolicies from './threatIntelligencePolicies';
export * as tls from './tls';
export * as tlsInspectionPolicies from './tlsInspectionPolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess': Operation<'/networkAccess', 'get'>;
  'PATCH /networkAccess': Operation<'/networkAccess', 'patch'>;
}

/**
 * `GET /networkAccess`
 *
 */
export function list(
  params?: IEndpoints['GET /networkAccess']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess']['body'],
  params?: IEndpoints['PATCH /networkAccess']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess',
    paramDefs: [],
    params,
    body,
  };
}
