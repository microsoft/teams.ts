import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
