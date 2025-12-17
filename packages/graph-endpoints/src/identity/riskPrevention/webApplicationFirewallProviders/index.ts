import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    'delete'
  >;
  'GET /identity/riskPrevention/webApplicationFirewallProviders': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders',
    'get'
  >;
  'GET /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    'get'
  >;
  'PATCH /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    'patch'
  >;
  'POST /identity/riskPrevention/webApplicationFirewallProviders': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders',
    'post'
  >;
  'POST /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify': Operation<
    '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify',
    'post'
  >;
}

/**
 * `DELETE /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['webApplicationFirewallProvider-id'],
    },
    params,
  };
}

/**
 * `GET /identity/riskPrevention/webApplicationFirewallProviders`
 *
 */
export function list(
  params?: IEndpoints['GET /identity/riskPrevention/webApplicationFirewallProviders']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/riskPrevention/webApplicationFirewallProviders']['response']
> {
  return {
    method: 'get',
    path: '/identity/riskPrevention/webApplicationFirewallProviders',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    paramDefs: {
      path: ['webApplicationFirewallProvider-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['body'],
  params?: IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}',
    paramDefs: {
      path: ['webApplicationFirewallProvider-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/riskPrevention/webApplicationFirewallProviders`
 *
 */
export function create(
  body: IEndpoints['POST /identity/riskPrevention/webApplicationFirewallProviders']['body']
): EndpointRequest<
  IEndpoints['POST /identity/riskPrevention/webApplicationFirewallProviders']['response']
> {
  return {
    method: 'post',
    path: '/identity/riskPrevention/webApplicationFirewallProviders',
    body,
  };
}

export const verify = {
  /**
   * `POST /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify`
   *
   */
  create: function create(
    body: IEndpoints['POST /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify']['body'],
    params?: IEndpoints['POST /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify']['response']
  > {
    return {
      method: 'post',
      path: '/identity/riskPrevention/webApplicationFirewallProviders/{webApplicationFirewallProvider-id}/verify',
      paramDefs: {
        path: ['webApplicationFirewallProvider-id'],
      },
      params,
      body,
    };
  },
};
