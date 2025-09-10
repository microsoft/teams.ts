export * as item from './item';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    paramDefs: {
      path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'purchaseInvoice-id', 'purchaseInvoiceLine-id'],
      },
      params,
    };
  },
};
