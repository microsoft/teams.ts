import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
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
 * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/paymentTerm',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
