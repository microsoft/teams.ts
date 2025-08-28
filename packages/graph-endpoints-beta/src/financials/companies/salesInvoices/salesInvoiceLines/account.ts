import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/salesInvoiceLines/{salesInvoiceLine-id}/account',
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
