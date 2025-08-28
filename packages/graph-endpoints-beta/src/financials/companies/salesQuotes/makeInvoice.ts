import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/makeInvoice',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
