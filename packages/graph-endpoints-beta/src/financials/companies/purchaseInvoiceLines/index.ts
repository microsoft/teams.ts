export * as account from './account';
export * as item from './item';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/purchaseInvoiceLines': Operation<
    '/financials/companies/{company-id}/purchaseInvoiceLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}': Operation<
    '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoiceLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoiceLines',
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
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoiceLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoiceLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
