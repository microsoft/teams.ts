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
  'DELETE /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
