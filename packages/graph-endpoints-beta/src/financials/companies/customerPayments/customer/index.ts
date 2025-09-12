export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    'patch'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'customerPayment-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: {
      path: ['company-id', 'customerPayment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: {
      path: ['company-id', 'customerPayment-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
      paramDefs: {
        path: ['company-id', 'customerPayment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
};

export const paymentMethod = {
  /**
   * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
      paramDefs: {
        path: ['company-id', 'customerPayment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
      paramDefs: {
        path: ['company-id', 'customerPayment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
};

export const shipmentMethod = {
  /**
   * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
      paramDefs: {
        path: ['company-id', 'customerPayment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customerPayment-id'],
      },
      params,
    };
  },
};
