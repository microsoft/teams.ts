export * as appConsentRequests from './appConsentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/appConsent': Operation<'/identityGovernance/appConsent', 'delete'>;
  'GET /identityGovernance/appConsent': Operation<'/identityGovernance/appConsent', 'get'>;
  'PATCH /identityGovernance/appConsent': Operation<'/identityGovernance/appConsent', 'patch'>;
}

/**
 * `DELETE /identityGovernance/appConsent`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/appConsent']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/appConsent']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/appConsent',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/appConsent']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/appConsent']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/appConsent',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/appConsent`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/appConsent']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/appConsent']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/appConsent',
    body,
  };
}
