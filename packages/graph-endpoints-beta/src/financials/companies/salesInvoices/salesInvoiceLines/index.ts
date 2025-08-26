export * as account from './account';
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
