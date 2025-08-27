export * as advancedThreatProtectionOnboardingDeviceSettingStates from './advancedThreatProtectionOnboardingDeviceSettingStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'delete'
  >;
  'GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 * The summary state of ATP onboarding state for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    paramDefs: [],
    params,
    body,
  };
}
