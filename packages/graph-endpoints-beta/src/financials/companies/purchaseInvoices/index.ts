export * as purchaseInvoiceLines from './purchaseInvoiceLines';
export * as vendor from './vendor';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/purchaseInvoices': Operation<
    '/financials/companies/{company-id}/purchaseInvoices',
    'get'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
    'delete'
  >;
  'POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post',
    'post'
  >;
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
};

export const post = {
  /**
   * `POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id'],
      },
      params,
    };
  },
};
