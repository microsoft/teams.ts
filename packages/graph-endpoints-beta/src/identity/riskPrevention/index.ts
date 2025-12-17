export * as webApplicationFirewallProviders from './webApplicationFirewallProviders';
export * as webApplicationFirewallVerifications from './webApplicationFirewallVerifications';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/riskPrevention': Operation<'/identity/riskPrevention', 'delete'>;
  'GET /identity/riskPrevention': Operation<'/identity/riskPrevention', 'get'>;
  'PATCH /identity/riskPrevention': Operation<'/identity/riskPrevention', 'patch'>;
  'GET /identity/riskPrevention/fraudProtectionProviders': Operation<
    '/identity/riskPrevention/fraudProtectionProviders',
    'get'
  >;
  'POST /identity/riskPrevention/fraudProtectionProviders': Operation<
    '/identity/riskPrevention/fraudProtectionProviders',
    'post'
  >;
  'GET /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}': Operation<
    '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
    'get'
  >;
  'PATCH /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}': Operation<
    '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
    'patch'
  >;
  'DELETE /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}': Operation<
    '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
    'delete'
  >;
}

/**
 * `DELETE /identity/riskPrevention`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/riskPrevention']['parameters']
): EndpointRequest<IEndpoints['DELETE /identity/riskPrevention']['response']> {
  return {
    ver: 'beta',
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
 * Represents the entry point for fraud and risk prevention configurations in Microsoft Entra External ID, including third-party provider settings.
 */
export function get(
  params?: IEndpoints['GET /identity/riskPrevention']['parameters']
): EndpointRequest<IEndpoints['GET /identity/riskPrevention']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/identity/riskPrevention',
    body,
  };
}

export const fraudProtectionProviders = {
  /**
   * `GET /identity/riskPrevention/fraudProtectionProviders`
   *
   * Represents entry point for fraud protection provider configurations for Microsoft Entra External ID tenants.
   */
  list: function list(
    params?: IEndpoints['GET /identity/riskPrevention/fraudProtectionProviders']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/riskPrevention/fraudProtectionProviders']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/riskPrevention/fraudProtectionProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/riskPrevention/fraudProtectionProviders`
   *
   * Create a new fraudProtectionProvider object. You can create one of the following subtypes that are derived from fraudProtectionProvider.
   */
  create: function create(
    body: IEndpoints['POST /identity/riskPrevention/fraudProtectionProviders']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/riskPrevention/fraudProtectionProviders']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/riskPrevention/fraudProtectionProviders',
      body,
    };
  },
  /**
   * `GET /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}`
   *
   * Represents entry point for fraud protection provider configurations for Microsoft Entra External ID tenants.
   */
  get: function get(
    params?: IEndpoints['GET /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fraudProtectionProvider-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['body'],
    params?: IEndpoints['PATCH /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
      paramDefs: {
        path: ['fraudProtectionProvider-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/riskPrevention/fraudProtectionProviders/{fraudProtectionProvider-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fraudProtectionProvider-id'],
      },
      params,
    };
  },
};
