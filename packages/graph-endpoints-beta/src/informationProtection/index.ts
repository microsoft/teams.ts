export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as decryptBuffer from './decryptBuffer';
export * as encryptBuffer from './encryptBuffer';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as sensitivityPolicySettings from './sensitivityPolicySettings';
export * as signDigest from './signDigest';
export * as threatAssessmentRequests from './threatAssessmentRequests';
export * as verifySignature from './verifySignature';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection': Operation<'/informationProtection', 'get'>;
  'PATCH /informationProtection': Operation<'/informationProtection', 'patch'>;
}

/**
 * `GET /informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection']['body'],
  params?: IEndpoints['PATCH /informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection',
    paramDefs: [],
    params,
    body,
  };
}
