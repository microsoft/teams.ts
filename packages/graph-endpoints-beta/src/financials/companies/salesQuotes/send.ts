import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/send',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
