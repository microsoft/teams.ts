import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account': Operation<
    '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoiceLines/{purchaseInvoiceLine-id}/account',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoiceLine-id', in: 'path' },
    ],
    params,
  };
}
