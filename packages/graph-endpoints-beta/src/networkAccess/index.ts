export * as alerts from './alerts';
export * as connectivity from './connectivity';
export * as filteringPolicies from './filteringPolicies';
export * as forwardingPolicies from './forwardingPolicies';
export * as logs from './logs';
export * as settings from './settings';
export * as threatIntelligencePolicies from './threatIntelligencePolicies';
export * as tls from './tls';
export * as tlsInspectionPolicies from './tlsInspectionPolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess': Operation<'/networkAccess', 'get'>;
  'PATCH /networkAccess': Operation<'/networkAccess', 'patch'>;
  'GET /networkAccess/reports': Operation<'/networkAccess/reports', 'get'>;
  'PATCH /networkAccess/reports': Operation<'/networkAccess/reports', 'patch'>;
  'DELETE /networkAccess/reports': Operation<'/networkAccess/reports', 'delete'>;
  'GET /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'get'>;
  'PATCH /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'patch'>;
  'DELETE /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'delete'>;
}

/**
 * `GET /networkAccess`
 *
 */
export function list(
  params?: IEndpoints['GET /networkAccess']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess']['body']
): EndpointRequest<IEndpoints['PATCH /networkAccess']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess',
    body,
  };
}

export const reports = {
  /**
   * `GET /networkAccess/reports`
   *
   * Represents the status of the Global Secure Access services for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/reports']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/reports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/reports',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/reports`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/reports']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/reports']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/reports',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/reports`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/reports']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/reports']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/reports',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const tenantStatus = {
  /**
   * `GET /networkAccess/tenantStatus`
   *
   * Retrieve the onboarding status of a specific tenant.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/tenantStatus']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/tenantStatus']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/tenantStatus',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/tenantStatus`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/tenantStatus']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/tenantStatus']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/tenantStatus',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/tenantStatus`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/tenantStatus']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/tenantStatus']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/tenantStatus',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
