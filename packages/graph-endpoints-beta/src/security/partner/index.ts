export * as securityScore from './securityScore';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner': Operation<'/security/partner', 'delete'>;
  'GET /security/partner': Operation<'/security/partner', 'get'>;
  'PATCH /security/partner': Operation<'/security/partner', 'patch'>;
  'GET /security/partner/securityAlerts': Operation<'/security/partner/securityAlerts', 'get'>;
  'POST /security/partner/securityAlerts': Operation<'/security/partner/securityAlerts', 'post'>;
  'GET /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'get'
  >;
  'PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'patch'
  >;
  'DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/partner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/partner`
 *
 * A container that safeguards the Microsoft Azure resources of Microsoft Cloud Solution Provider (CSP) partners&#x27; customers, including alerts, scores, and all aspects of security.
 */
export function get(
  params?: IEndpoints['GET /security/partner']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/partner`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner']['body']
): EndpointRequest<IEndpoints['PATCH /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner',
    body,
  };
}

export const securityAlerts = {
  /**
   * `GET /security/partner/securityAlerts`
   *
   * Get a list of the partnerSecurityAlert objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/partner/securityAlerts']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/partner/securityAlerts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityAlerts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/partner/securityAlerts`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/partner/securityAlerts']['body']
  ): EndpointRequest<IEndpoints['POST /security/partner/securityAlerts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/partner/securityAlerts',
      body,
    };
  },
  /**
   * `GET /security/partner/securityAlerts/{partnerSecurityAlert-id}`
   *
   * Read the properties and relationships of a partnerSecurityAlert object.
   */
  get: function get(
    params?: IEndpoints['GET /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['partnerSecurityAlert-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}`
   *
   * Update the properties of a partnerSecurityAlert object.
   */
  update: function update(
    body: IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['body'],
    params?: IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
      paramDefs: {
        path: ['partnerSecurityAlert-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['partnerSecurityAlert-id'],
      },
      params,
    };
  },
};
