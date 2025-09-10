export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'patch'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'purchaseInvoice-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
};

export const paymentMethod = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
};
