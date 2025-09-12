export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    'patch'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
    },
    params,
    body,
  };
}

export const itemCategory = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      },
      params,
    };
  },
};
