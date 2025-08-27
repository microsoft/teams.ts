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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection': Operation<'/me/informationProtection', 'delete'>;
  'GET /me/informationProtection': Operation<'/me/informationProtection', 'get'>;
  'PATCH /me/informationProtection': Operation<'/me/informationProtection', 'patch'>;
}

/**
 * `DELETE /me/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection']['body'],
  params?: IEndpoints['PATCH /me/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection',
    paramDefs: [],
    params,
    body,
  };
}
