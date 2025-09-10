export * as customer from './customer';
export * as salesOrderLines from './salesOrderLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesOrders': Operation<
    '/financials/companies/{company-id}/salesOrders',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
    'delete'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesOrders`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/salesOrders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrders',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    paramDefs: {
      path: ['company-id', 'salesOrder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    paramDefs: {
      path: ['company-id', 'salesOrder-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesOrder-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
      paramDefs: {
        path: ['company-id', 'salesOrder-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesOrder-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesOrder-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'salesOrder-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesOrder-id'],
      },
      params,
    };
  },
};
