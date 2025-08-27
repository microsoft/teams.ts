import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
