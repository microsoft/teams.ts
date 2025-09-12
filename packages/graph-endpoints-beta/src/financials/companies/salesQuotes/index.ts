export * as customer from './customer';
export * as salesQuoteLines from './salesQuoteLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesQuotes': Operation<
    '/financials/companies/{company-id}/salesQuotes',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
    'delete'
  >;
  'POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice',
    'post'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
    'delete'
  >;
  'POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send',
    'post'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'delete'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/salesQuotes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}',
    paramDefs: {
      path: ['company-id', 'salesQuote-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}',
    paramDefs: {
      path: ['company-id', 'salesQuote-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
      paramDefs: {
        path: ['company-id', 'salesQuote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
};

export const makeInvoice = {
  /**
   * `POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice',
      paramDefs: {
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'salesQuote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
};

export const send = {
  /**
   * `POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send',
      paramDefs: {
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
};

export const shipmentMethod = {
  /**
   * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
      paramDefs: {
        path: ['company-id', 'salesQuote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesQuote-id'],
      },
      params,
    };
  },
};
