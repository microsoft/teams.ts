export * as currency from './currency';
export * as post from './post';
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
