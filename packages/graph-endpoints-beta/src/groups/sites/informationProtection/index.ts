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

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
