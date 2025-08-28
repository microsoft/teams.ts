export * as currency from './currency';
export * as customer from './customer';
export * as makeInvoice from './makeInvoice';
export * as paymentTerm from './paymentTerm';
export * as salesQuoteLines from './salesQuoteLines';
export * as send from './send';
export * as shipmentMethod from './shipmentMethod';

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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
