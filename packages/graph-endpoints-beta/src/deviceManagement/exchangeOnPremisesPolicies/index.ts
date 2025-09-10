import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies',
    'get'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/exchangeOnPremisesPolicies': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies',
    'post'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'patch'
  >;
  'DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementExchangeOnPremisesPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicies`
 *
 * The list of Exchange On Premisis policies configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 * The list of Exchange On Premisis policies configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: {
      path: ['deviceManagementExchangeOnPremisesPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: {
      path: ['deviceManagementExchangeOnPremisesPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/exchangeOnPremisesPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/exchangeOnPremisesPolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/exchangeOnPremisesPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/exchangeOnPremisesPolicies',
    body,
  };
}

export const conditionalAccessSettings = {
  /**
   * `GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
   *
   * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementExchangeOnPremisesPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['body'],
    params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
      paramDefs: {
        path: ['deviceManagementExchangeOnPremisesPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementExchangeOnPremisesPolicy-id'],
      },
      params,
    };
  },
};
