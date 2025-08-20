import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
