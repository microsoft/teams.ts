import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
