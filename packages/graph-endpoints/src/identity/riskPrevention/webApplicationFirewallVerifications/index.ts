import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    'delete'
  >;
  'GET /identity/riskPrevention/webApplicationFirewallVerifications': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications',
    'get'
  >;
  'GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    'get'
  >;
  'PATCH /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    'patch'
  >;
  'POST /identity/riskPrevention/webApplicationFirewallVerifications': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications',
    'post'
  >;
  'GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider': Operation<
    '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider',
    'get'
  >;
}

/**
 * `DELETE /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['webApplicationFirewallVerificationModel-id'],
    },
    params,
  };
}

/**
 * `GET /identity/riskPrevention/webApplicationFirewallVerifications`
 *
 */
export function list(
  params?: IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications']['response']
> {
  return {
    method: 'get',
    path: '/identity/riskPrevention/webApplicationFirewallVerifications',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    paramDefs: {
      path: ['webApplicationFirewallVerificationModel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['body'],
  params?: IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}',
    paramDefs: {
      path: ['webApplicationFirewallVerificationModel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/riskPrevention/webApplicationFirewallVerifications`
 *
 */
export function create(
  body: IEndpoints['POST /identity/riskPrevention/webApplicationFirewallVerifications']['body']
): EndpointRequest<
  IEndpoints['POST /identity/riskPrevention/webApplicationFirewallVerifications']['response']
> {
  return {
    method: 'post',
    path: '/identity/riskPrevention/webApplicationFirewallVerifications',
    body,
  };
}

export const provider = {
  /**
   * `GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider`
   *
   */
  get: function get(
    params?: IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider']['response']
  > {
    return {
      method: 'get',
      path: '/identity/riskPrevention/webApplicationFirewallVerifications/{webApplicationFirewallVerificationModel-id}/provider',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['webApplicationFirewallVerificationModel-id'],
      },
      params,
    };
  },
};
