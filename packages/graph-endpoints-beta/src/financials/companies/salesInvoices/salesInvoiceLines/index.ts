export * as item from './item';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines',
    paramDefs: {
      path: ['company-id', 'salesInvoice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}',
    paramDefs: {
      path: ['company-id', 'salesInvoice-id', 'salesInvoiceLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}',
    paramDefs: {
      path: ['company-id', 'salesInvoice-id', 'salesInvoiceLine-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesInvoice-id', 'salesInvoiceLine-id'],
      },
      params,
    };
  },
};
