export * as cancel from './cancel';
export * as cancelAndSend from './cancelAndSend';
export * as currency from './currency';
export * as customer from './customer';
export * as paymentTerm from './paymentTerm';
export * as post from './post';
export * as postAndSend from './postAndSend';
export * as salesInvoiceLines from './salesInvoiceLines';
export * as send from './send';
export * as shipmentMethod from './shipmentMethod';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesInvoices': Operation<
    '/financials/companies/{company-id}/salesInvoices',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/salesInvoices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices',
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
 * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
