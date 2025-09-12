import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'patch'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'patch'
  >;
  'DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicy`
 *
 * The policy which controls mobile device access to Exchange On Premises
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicy`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    body,
  };
}

export const conditionalAccessSettings = {
  /**
   * `GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
   *
   * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
