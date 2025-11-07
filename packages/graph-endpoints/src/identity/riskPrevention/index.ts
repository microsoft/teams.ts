export * as webApplicationFirewallProviders from './webApplicationFirewallProviders';
export * as webApplicationFirewallVerifications from './webApplicationFirewallVerifications';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/riskPrevention': Operation<'/identity/riskPrevention', 'delete'>;
  'GET /identity/riskPrevention': Operation<'/identity/riskPrevention', 'get'>;
  'PATCH /identity/riskPrevention': Operation<'/identity/riskPrevention', 'patch'>;
}

/**
 * `DELETE /identity/riskPrevention`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/riskPrevention']['parameters']
): EndpointRequest<IEndpoints['DELETE /identity/riskPrevention']['response']> {
  return {
    method: 'delete',
    path: '/identity/riskPrevention',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identity/riskPrevention`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/riskPrevention']['parameters']
): EndpointRequest<IEndpoints['GET /identity/riskPrevention']['response']> {
  return {
    method: 'get',
    path: '/identity/riskPrevention',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/riskPrevention`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/riskPrevention']['body']
): EndpointRequest<IEndpoints['PATCH /identity/riskPrevention']['response']> {
  return {
    method: 'patch',
    path: '/identity/riskPrevention',
    body,
  };
}
