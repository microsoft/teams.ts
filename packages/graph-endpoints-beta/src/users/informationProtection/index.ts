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
  'DELETE /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
